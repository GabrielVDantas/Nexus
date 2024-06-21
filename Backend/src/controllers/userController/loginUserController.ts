import { Request, Response } from "express";
import LoginUserService from "../../service/userService/loginUserService";

class LoginUserController {
  static async loginUserController(req: Request, res: Response) {
    const loginUserData = req.loginUserDto;
    try {
      const loginUser = await LoginUserService.loginUserService(loginUserData);
      return res.status(201).json({
        message: "Usuário registrado com sucesso!",
        user: loginUser,
      });
    } catch (error) {
      return res
        .status(500)
        .json({
          message: "Algo deu errado, usuário não será registrado!",
          error: error,
        });
    }
  }
}

export default LoginUserController;
