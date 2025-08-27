import { NextFunction, Request, Response } from "express";
import classService from "./class.service";
import { EnrollDto } from "./class.dto";

const getClassList = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const classes = await classService.getClassList();
    res.json(classes);
  } catch (error) {
    next(error);
  }
};

const createClass = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const dto = (req as any).validated as { name: string; section: string };
    const newClass = await classService.createClass(dto);
    res.status(201).json(newClass);
  } catch (error) {
    next(error);
  }
};

// Enroll Specific student to specific class
const enrollAStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const dto = (req as any).validated as { studentId: string };
    const student = await classService.enrollAStudent(
      req.params.id,
      dto.studentId
    );
    res.json({ message: "Enrolled", student });
  } catch (error) {
    next(error);
  }
};

const allStudents = async (req: Request, res: Response) => {
    const students = await classService.allStudents(req.params.id);
    res.json(students);
  }


export default {
  getClassList,
  createClass,
  enrollAStudent,
  allStudents
};
