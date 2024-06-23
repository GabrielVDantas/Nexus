import userRepository from "../../repositories/userRepository";
import PasswordService from "../passwordService/passwordService";
import UpdateUserDTO from "../../dtos/userDtos/updateUserDto";
import User from "../../models/User";
import { Long } from "typeorm";

class UpdateUserService {
  static async updateUserService(userId: Long, updateUserData: UpdateUserDTO) {

    const user = await userRepository.findOne({ where: { id: userId } }) as User;

    user.username = updateUserData.username ?? user.username;
    const result = await PasswordService.compareCodedPasswords(updateUserData.password, user.password);
    if (!result) {
      const encodedPassword = await PasswordService.encodePassword(updateUserData.password);
      user.password = encodedPassword;
    }

    user.photo = updateUserData.photo ?? user.photo;
    user.description = updateUserData.description ?? user.description;

    return {id: user.id, username: user.username, email: user.email, active: user.active, description: user.description};
  }

}

export default UpdateUserService;
