import { Router } from "express";
import RegisterUserController from "../controllers/userController/registerUserController";
import LoginUserController from "../controllers/userController/loginUserController";
import UpdateUserController from "../controllers/userController/updateUserController";
import DeleteUserController from "../controllers/userController/deleteUserController";

const userRoutes = Router();

userRoutes.post(
  "/register-user",
  RegisterUserController.registerUserController
);

userRoutes.post("/login-user", LoginUserController.loginUserController);

userRoutes.put("/update-user", UpdateUserController.updateUserController);

userRoutes.delete("/delete-user", DeleteUserController.deleteUserController);

export default userRoutes;
