import "dotenv/config";

export const config = {
  port: Number(process.env.PORT) || 4000,
  jwt: {
    accessSecret: process.env.JWT_ACCESS_SECRET || "access",
    refreshSecret: process.env.JWT_REFRESH_SECRET || "refresh",
    accessExpiresIn: process.env.JWT_ACCESS_EXPIRES || "15m",
    refreshExpiresIn: process.env.JWT_REFRESH_EXPIRES || "7d",
  },
};
