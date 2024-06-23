import { Request, Response } from "express";
import TokenMailService from "../../service/mailService/tokenMailService";

class MailController {
  static async mailController(req: Request, res: Response) {
    const token = req.params.token;

    try {
      const activatedUser = await TokenMailService.tokenMailService(token);
      return res
        .status(200)
        .json({ message: "Registro concluído com sucesso!" });
    } catch (error) {
      return res.status(500).json({
        message: "Algo deu errado, usuário não foi ativado!",
        error: error,
      });
    }
  }
}

export default MailController;
