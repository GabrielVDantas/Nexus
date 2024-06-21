import LoginUserDTO from "../../dtos/userDtos/loginUserDto";
import userRepository from "../../repositories/userRepository";

class RegisterUserService {
  static async registerUserService(loginUserData: LoginUserDTO) {

    const existingUser = await userRepository.findOne({ where: { email: loginUserData.email } });
    if (!existingUser) {
        throw new Error("Já existe um usuário com esse e-mail!");
    }

     
    await userRepository.save(newUser);

    return newUser;
  }
}

export default RegisterUserService;
