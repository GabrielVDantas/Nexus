import userRepository from "../../repositories/userRepository";
import PasswordService from "../passwordService/passwordService";
import User from "../../models/User";
import { Long } from "typeorm";

class UpdateUserService {
  static async updateUserService(
    userId: Long,
    username: string,
    password: string,
    description: string,
    photo: Express.Multer.File
  ) {
    const user = await userRepository.findOne({where: { id: userId },}) as User;

    user.username = username ?? user.username;

    const result = await PasswordService.compareCodedPasswords(password, user.password);
    if (!result) {
      const encodedPassword = await PasswordService.encodePassword(password);
      user.password = encodedPassword;
    }

    const photoAsBuffer = photo.buffer;
    user.photo = photoAsBuffer ?? user.photo;
    user.description = description ?? user.description;

    return {id: user.id, username: user.username, email: user.email, description: user.description};
  }
}

export default UpdateUserService;
