import { Router } from "express";
import { validateBody } from "../../middlewares/validates";
import { CreateStudentDto } from "./student.dto";
import studentController from "./student.controller";
import { allowRoles } from "../../middlewares/roles";
import auth from "../../middlewares/auth";

const route = Router();

route.post("/",auth,allowRoles("admin"),validateBody(CreateStudentDto),studentController.createStudent);
route.get('/', auth, allowRoles('admin','teacher'), studentController.studentList);
route.get('/:id', auth, allowRoles('admin','teacher'), studentController.getStudentById);

export default route;
