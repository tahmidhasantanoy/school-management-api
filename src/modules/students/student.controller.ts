import { Request, Response, NextFunction } from "express";
import studentService from "./student.service";

// Update your controller method to include the `next` parameter
const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const dto = (req as any).validated as {
    name: string;
    age: number;
    classId?: string;
  };
  try {
    const student = await studentService.createStudent(dto);
    res.status(201).json(student);
  } catch (err) {
    next(err);  // May be go to globalErrorHandler
  }
};

export default {
  createStudent,
};
