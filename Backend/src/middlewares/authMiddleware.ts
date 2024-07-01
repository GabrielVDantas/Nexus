import { Request, Response, NextFunction } from "express";
import TokenService from "../service/utilService/tokenService";
import userRepository from "../repositories/userRepository";


class AuthMiddleware {
  static async authMiddleware(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;

    if (!authorization) {
      throw new Error("Não autorizado!");
    }

    const token = await TokenService.getToken(authorization);

    const id = await TokenService.verifyToken(token);

    const user = await userRepository.findOneBy({id});

    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado!" });
    }

    if (!user.active) {
      return res.status(403).json({ message: "Usuário não ativado!" });
    }

    const { password: _, ...loggedUser } = user;

    req.user = loggedUser;

    next();
  }
}

export default AuthMiddleware;
