import LoginUserDTO from "../../dtos/userDtos/loginUserDto";
import userRepository from "../../repositories/userRepository";
import PasswordService from "../passwordService/passwordService";
import TokenService from "../tokenService/tokenService";

class LoginUserService {
  static async loginUserService(loginUserData: LoginUserDTO) {

    const existingUser = await userRepository.findOne({ where: { email: loginUserData.email } });
    if (!existingUser) {
        throw new Error("Informações incorretas!");
    }

    if (!existingUser.active) {
      throw new Error("Conta inativa!");
    }

    const result = await PasswordService.compareCodedPasswords(loginUserData.password, existingUser.password);

    if (!result) {
      throw new Error("Informações incorretas!")
    }

    const token = await TokenService.generateToken(existingUser);

    return {id: existingUser.id, username: existingUser.username, email: existingUser.email, active: existingUser.active, token};
  }
}

export default LoginUserService;
