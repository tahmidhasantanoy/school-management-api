/* 
    1. Check for the Authorization Header
    2. Extract and Verify the Token
    3. Attach User Payload and Proceed
    4. Handle Errors
*/

import { Request, Response, NextFunction } from "express";
import { verifyAccessToken } from "../utils/jwt";

// export function auth(req: Request, res: Response, next: NextFunction) {
const auth = (req: Request, res: Response, next: NextFunction) => {
  const header = req.headers.authorization;
  
  if (!header?.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ message: "Missing or invalid Authorization header" });
  }
  
  try {
    const token = header.split(" ")[1];
    const payload = verifyAccessToken(token);
    (req as any).user = payload; // attach user to request
    next();
  } catch {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

export default auth;
