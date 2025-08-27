import { Router } from "express";
import { authController } from "./auth.controller";
import { validateBody } from "../../middlewares/validates";
import { LoginDto, RefreshDto, SignupDto } from "./auth.dto";

const route = Router();

route.post("/signup", validateBody(SignupDto), authController.signup);
route.post("/refresh", validateBody(RefreshDto), authController.refresh);

export default route;
