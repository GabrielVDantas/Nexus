import LoginUserDTO from "../../dtos/userDtos/loginUserDto";
import userRepository from "../../repositories/userRepository";

class LoginUserService {
  static async loginUserService(loginUserData: LoginUserDTO) {

    const existingUser = await userRepository.findOne({ where: { email: loginUserData.email } });
    if (!existingUser) {
        throw new Error("Já existe um usuário com esse e-mail!");
    }

    await userRepository.save(existingUser);

    return existingUser;
  }
}

export default LoginUserService;
