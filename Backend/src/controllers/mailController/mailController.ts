import { Request, Response } from "express";
import MailService from "../../service/utilService/mailService";

class MailController {
  static async mailController(req: Request, res: Response) {
    const token = req.params.token;

    try {
      const activatedUser = await MailService.validateMailByToken(token);
      return res.status(200).json({
        message: "Registro concluído com sucesso!",
        user: activatedUser,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Algo deu errado, usuário não foi ativado!",
        error: error,
      });
    }
  }
}

export default MailController;
