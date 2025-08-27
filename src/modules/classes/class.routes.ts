import { Router } from "express";
import auth from "../../middlewares/auth";
import { allowRoles } from "../../middlewares/roles";
import { validateBody } from "../../middlewares/validates";
import { CreateClassDto, EnrollDto } from "./class.dto";
import classController  from "./class.controller";

const route = Router();

// Routes
// route.get("/");
route.post("/",auth,allowRoles("admin"),validateBody(CreateClassDto),classController.createClass
);
route.post('/:id/enroll', auth, allowRoles('admin','teacher'), validateBody(EnrollDto), classController.enrollAStudent);

export default route;
