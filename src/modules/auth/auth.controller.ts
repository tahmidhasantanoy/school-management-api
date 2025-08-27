import { Request, Response } from "express";
import { authService } from "./auth.service";
import { verifyRefreshToken } from "../../utils/jwt";

export const authController = {
  signup: async (req: Request, res: Response) => {
    // console.log(req);
    
    // validated ensures you only work with data that passed your schema validation.
    const dto = (req as any)
    .validated as {
      name: string;
      email: string;
      password: string;
      role: any;
    };

    const result = await authService.signup(dto);
    res.status(201).json(result);
  },


  refresh: async (req: Request, res: Response) => {
    const dto = (req as any).validated as { token: string };
    try {
      verifyRefreshToken(dto.token); // will throw if invalid/expired
      const result = await authService.refresh(dto.token);
      res.json(result);
    } catch {
      res.status(401).json({ message: "Invalid or expired refresh token" });
    }
  },
};
