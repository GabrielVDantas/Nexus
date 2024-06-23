import { Request, Response } from "express";
import { Long } from "typeorm";
import DeleteUserService from "../../service/userService/deleteUserService";

class DeleteUserController {
  static async deleteUserController(req: Request, res: Response) {
    const userId = req.user.id as Long;

    try {
      await DeleteUserService.deleteUserService(userId);
      return res.status(204).json({
        message: "Usuário deletado com sucesso!",
      });
    } catch (error) {
      return res.status(500).json({
        message: "Algo deu errado, usuário não será deletado!",
        error: error,
      });
    }
  }
}

export default DeleteUserController;
