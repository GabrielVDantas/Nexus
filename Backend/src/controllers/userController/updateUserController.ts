import { Request, Response } from "express";
import { Long } from "typeorm";
import UpdateUserService from "../../service/userService/updateUserService";

class UpdateUserController {
  static async updateUserController(req: Request, res: Response) {
    const userId = req.user.id as Long;
    const { username, password, description} = req.body;
    const photo = req.file as Express.Multer.File;

    try {
      const updatedUser = await UpdateUserService.updateUserService(userId,
        username, password, description, photo
      );
      return res.json({
        message: "Usuário atualizado com sucesso!",
        user: updatedUser,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Algo deu errado, usuário não será atualizado!",
        error: error,
      });
    }
  }
}

export default UpdateUserController;
