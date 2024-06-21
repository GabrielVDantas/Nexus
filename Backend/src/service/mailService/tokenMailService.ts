import User from "../../models/User";
import userRepository from "../../repositories/userRepository";
import TokenService from "../tokenService/tokenService";

class TokenMailService {
  static async tokenMailService(token: string) {
    const id = await TokenService.verifyToken(token);

    const user = await userRepository.findOneBy({ id }) as User;

    user.active = true;
    await userRepository.save(user);

    return {id: user.id, username: user.username, email: user.email, active: user.active};
  }
}

export default TokenMailService;
