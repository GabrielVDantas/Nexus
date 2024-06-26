import { Request, Response } from "express";
import RegisterUserService from "../../service/userService/registerUserService";

class RegisterUserController {
  static async registerUserController(req: Request, res: Response) {
    const { username, email, password } = req.body;
    const file = req.file as Express.Multer.File;

    try {
      const registerUser = await RegisterUserService.registerUserService(username, email, password);
      return res.status(201).json({
        message: "Usuário registrado com sucesso!",
        user: registerUser,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Algo deu errado, usuário não será registrado!",
        error: error,
      });
    }
  }
}

export default RegisterUserController;
