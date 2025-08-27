/* error handler */
import { Request, Response, NextFunction } from "express";

const errorHandler = (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  console.error(err, "<- error");
  const status = err.status || 500;
  res.status(status).json({
    message: err.message || "Internal Server Error",
    details: err.details || undefined,
  });
};

export default errorHandler;
