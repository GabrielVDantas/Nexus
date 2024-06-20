import { Router } from "express";
import RegisterUserController from "../controllers/userController/registerUserController";
import registerUserMiddleware from "../middlewares/validateDTOMuddlewares/registerUserMiddleware";

const userRoutes = Router();

userRoutes.use(registerUserMiddleware);

userRoutes.post("/register-user", RegisterUserController.registerUserController);

export default userRoutes;