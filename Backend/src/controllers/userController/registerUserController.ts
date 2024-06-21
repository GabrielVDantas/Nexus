import { Request, Response } from "express";
import RegisterUserService from "../../service/userService/registerUserService";

class RegisterUserController {
  static async registerUserController(req: Request, res: Response) {
    const registerUserData = req.registerUserDto;
    try {
      const registerUser = await RegisterUserService.registerUserService(
        registerUserData
      );
      res
        .status(201)
        .json({
          message: "Usuário registrado com sucesso!",
          user: registerUser,
        });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Algo deu errado, usuário não será registrado!" });
    }
  }
}

export default RegisterUserController;
