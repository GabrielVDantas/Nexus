import { Request, Response } from "express";
import GetUserService from "../../service/userService/getUserService";
import { Long } from "typeorm";

class GetUserController {
  static async getUserController(req: Request, res: Response) {
    const userId = req.user.id as Long;
    
    try {
      const user = await GetUserService.getUserService(userId);
      return res.json({
        message: "Usuário atualizado com sucesso!",
        user: user,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Algo deu errado, usuário não será atualizado!",
        error: error,
      });
    }
  }
}

export default GetUserController;
