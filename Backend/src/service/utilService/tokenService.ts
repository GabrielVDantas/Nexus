import jwt from "jsonwebtoken";
import User from "../../models/User";
import { Long } from "typeorm";

type JwtPayLoad = {
    id: Long;
}

class TokenService {
  static async generateToken(user: User) {
    const token = jwt.sign({ id: user.id }, "NexusSafeJWTPass", {
      expiresIn: "1d",
    });
    return token;
  }

  static async getToken(authorization: string) {
    return authorization.split(" ")[1];
  }

  static async verifyToken(token: string) {
    const { id } = jwt.verify(token, "NexusSafeJWTPass") as JwtPayLoad;
    return id;
  }
}

export default TokenService;
