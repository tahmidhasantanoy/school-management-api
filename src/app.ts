import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import authRoutes from "./modules/auth/auth.routes";
import studentRoutes from "./modules/students/student.routes";
import classRoutes from "./modules/classes/class.routes";
import errorHandler from "./middlewares/errorHandler";

const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use(helmet());


app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const status = err.status || 500;
  const message = err.message || "Internal server error";
  res.status(status).json({ error: message });
});

//Routes
app.use("/auth", authRoutes);
app.use("/students", studentRoutes);
app.use("/classes", classRoutes);

// Middlewares run when handle requests or throw error, for that case this is in bottom
app.use(errorHandler);

export default app;
