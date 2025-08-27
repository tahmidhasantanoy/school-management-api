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

export default {
  getClassList,
  createClass,
  enrollAStudent,
};
