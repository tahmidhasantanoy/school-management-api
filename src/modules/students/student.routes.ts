import { Router } from "express";
import { validateBody } from "../../middlewares/validates";
import { CreateStudentDto } from "./student.dto";
import studentController from "./student.controller";
import { allowRoles } from "../../middlewares/roles";
import auth from "../../middlewares/auth";

const route = Router();

route.post(
  "/",
  auth,
  allowRoles("admin"),
  validateBody(CreateStudentDto),
  studentController.createStudent
);

export default route;
