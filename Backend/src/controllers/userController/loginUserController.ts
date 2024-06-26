import { Request, Response } from "express";
import LoginUserService from "../../service/userService/loginUserService";

class LoginUserController {
  static async loginUserController(req: Request, res: Response) {
    const {email, password} = req.body;
    
    try {
      const loginUser = await LoginUserService.loginUserService(email, password);
      return res.status(200).json({
        message: "Usuário logado com sucesso!",
        user: loginUser,
      });
    } catch (error) {
      return res
        .status(500)
        .json({
          message: "Algo deu errado, usuário não será logado!",
          error: error,
        });
    }
  }
}

export default LoginUserController;
