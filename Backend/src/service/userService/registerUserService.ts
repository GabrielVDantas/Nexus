import RegisterUserDTO from "../../dtos/userDtos/registerUserDto";
import userRepository from "../../repositories/userRepository";

class RegisterUserService {
  static async registerUserService(registerUserData: RegisterUserDTO) {

    const existingUser = await userRepository.findOne({ where: { email: registerUserData.email } });
    if (existingUser) {
        throw new Error("Já existe um usuário com esse e-mail!");
    }

    const newUser = userRepository.create(registerUserData);
    await userRepository.save(newUser);

    return newUser;
  }
}

export default RegisterUserService;
