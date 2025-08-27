import { Router } from "express";
import { validateBody } from "../../middlewares/validates";
import { CreateStudentDto } from "./student.dto";
import studentController from "./student.controller";
import { allowRoles } from "../../middlewares/roles";
import auth from "../../middlewares/auth";
import { create } from "domain";

const route = Router();

// const res = CreateStudentDto;
// console.log(res, "res in student.routes");

// Student routes
route.post(
  "/",
  auth,
  allowRoles("admin"),
  validateBody(CreateStudentDto), // it's ok when content-type is application/json
  studentController.createStudent
);

export default route;
