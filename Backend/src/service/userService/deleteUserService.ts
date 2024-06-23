import userRepository from "../../repositories/userRepository";
import User from "../../models/User";
import { Long } from "typeorm";

class DeleteUserService {
  static async deleteUserService(userId: Long) {
    const user = (await userRepository.findOne({
      where: { id: userId },
    })) as User;

    await userRepository.delete(user);
  }
}

export default DeleteUserService;
