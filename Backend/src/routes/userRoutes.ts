import { Router } from "express";
import RegisterUserController from "../controllers/userController/registerUserController";
import registerUserMiddleware from "../middlewares/dtoMiddlewares/registerUserMiddleware";
import LoginUserController from "../controllers/userController/loginUserController";
import loginUserMiddleware from "../middlewares/dtoMiddlewares/loginUserMiddleware";
import AuthMiddleware from "../middlewares/authMiddleware/authMiddleware";

const userRoutes = Router();

userRoutes.post(
  "/register-user",
  registerUserMiddleware,
  RegisterUserController.registerUserController
);

userRoutes.post(
  "/login-user",
  loginUserMiddleware,
  LoginUserController.loginUserController
);

export default userRoutes;
