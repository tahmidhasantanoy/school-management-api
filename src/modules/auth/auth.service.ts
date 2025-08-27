import prisma from "../../prisma";
import bcrypt from "bcrypt";
import { signAccessToken, signRefreshToken } from "../../utils/jwt";

export const authService = {
  async signup(data: {
    name: string;
    email: string;
    password: string;
    role: "admin" | "teacher" | "student";
  }) {
    const exists = await prisma.user.findUnique({
      where: { email: data.email },
    });

    if (exists) {
      console.log('i am in  exists'); // working
      throw { status: 400, message: "Email already in use" };
    }

    const passwordHash = await bcrypt.hash(data.password, 10);
    const user = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        passwordHash,
        role: data.role,
      },
    });

    const payload = { sub: user.id, role: user.role };
    return {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      accessToken: signAccessToken(payload),
      refreshToken: signRefreshToken(payload),
    };
  },


  async refresh(token: string) {
    // trust is verified in controller; re-issue pair by reading token payload again
    const jwt = await import("jsonwebtoken");
    const decoded = jwt.decode(token) as any;
    if (!decoded?.sub || !decoded?.role)
      throw { status: 401, message: "Invalid token" };

    const payload = { sub: decoded.sub, role: decoded.role };
    return {
      accessToken: signAccessToken(payload),
      refreshToken: signRefreshToken(payload),
    };
  },
};
