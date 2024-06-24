import User from "../../models/User";
import { Long } from "typeorm";
import userRepository from "../../repositories/userRepository";

class DeleteUserService {
  static async deleteUserService(userId: Long) {
    const user = await userRepository.findOneBy({id: userId}) as User;

    await userRepository.delete(user);
  }
}

export default DeleteUserService;
