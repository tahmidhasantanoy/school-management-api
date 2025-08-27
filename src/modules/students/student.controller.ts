import { Request, Response, NextFunction } from "express";
import studentService from "./student.service";

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
    next(err);
  }
};

const studentList = async (req: Request, res: Response) => {
  const data = await studentService.studentList();
  res.json(data);
};

const getStudentById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const student = await studentService.getStudentById(id);
  res.json(student);
};

export default {
  createStudent,
  studentList,
  getStudentById
};
