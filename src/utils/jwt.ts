import jwt from "jsonwebtoken";
import { config } from "../config";

export type JwtPayload = { sub: string; role: "admin" | "teacher" | "student" };

export const signAccessToken = (payload: JwtPayload) =>
  jwt.sign(payload, config.jwt.accessSecret, {
    expiresIn: config.jwt.accessExpiresIn,
  });

export const signRefreshToken = (payload: JwtPayload) =>
  jwt.sign(payload, config.jwt.refreshSecret, {
    expiresIn: config.jwt.refreshExpiresIn,
  });

export const verifyAccessToken = (token: string) =>
  jwt.verify(token, config.jwt.accessSecret) as JwtPayload;

export const verifyRefreshToken = (token: string) =>
  jwt.verify(token, config.jwt.refreshSecret) as JwtPayload;
