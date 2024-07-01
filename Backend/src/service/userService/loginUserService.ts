import userRepository from "../../repositories/userRepository";
import PasswordService from "../utilService/passwordService";
import TokenService from "../utilService/tokenService";

class LoginUserService {
  static async loginUserService(email: string, password: string) {

    const existingUser = await userRepository.findOne({ where: { email } });
    if (!existingUser) {
        throw new Error("Informações incorretas!");
    }

    if (!existingUser.active) {
      throw new Error("Conta inativa!");
    }

    const result = await PasswordService.compareCodedPasswords(password, existingUser.password);

    if (!result) {
      throw new Error("Informações incorretas!")
    }

    const token = await TokenService.generateToken(existingUser);

    return {id: existingUser.id, username: existingUser.username, email: existingUser.email, token};
  }
}

export default LoginUserService;
