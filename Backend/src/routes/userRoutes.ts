import { Router } from "express";
import RegisterUserController from "../controllers/userController/registerUserController";
import LoginUserController from "../controllers/userController/loginUserController";
import UpdateUserController from "../controllers/userController/updateUserController";
import DeleteUserController from "../controllers/userController/deleteUserController";
import GetUserController from "../controllers/userController/getUserController";
import AuthMiddleware from "../middlewares/authMiddleware";

const userRoutes = Router();

userRoutes.post(
  "/register-user",
  RegisterUserController.registerUserController
);

userRoutes.post("/login-user", LoginUserController.loginUserController);

userRoutes.get(
  "/profile-user",
  AuthMiddleware.authMiddleware,
  GetUserController.getUserController
);

userRoutes.put("/update-user", UpdateUserController.updateUserController);

userRoutes.delete("/delete-user", DeleteUserController.deleteUserController);

export default userRoutes;
