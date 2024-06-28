import { Long } from "typeorm";
import userRepository from "../../repositories/userRepository";

class GetUserService {
  static async activateUser(userId: Long) {
    const user = await userRepository.findOneBy({ id: userId });

    if (!user) {
      throw new Error("Usuário não encontrado!");
    }

    user.active = true;

    await userRepository.save(user);

    return user;
  }
}

export default GetUserService;
