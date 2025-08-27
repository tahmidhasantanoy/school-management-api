/* 
    This function, allowRoles, is an Express middleware for authorization. 
    Its purpose is to restrict access to certain routes based on a user's role.
*/

import { Request, Response, NextFunction } from "express";

export function allowRoles(...roles: Array<"admin" | "teacher" | "student">) {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = (req as any).user as { role?: string };

    if (!user?.role || !roles.includes(user.role as any)) {
      return res.status(403).json({ message: "Forbidden access" });
    }
    next();
  };
}
