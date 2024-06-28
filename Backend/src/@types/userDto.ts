import LoginUserDTO from "../dtos/userDtos/loginUserDto";
import RegisterUserDTO from "../dtos/userDtos/registerUserDto";
import UpdateUserDTO from "../dtos/userDtos/updateUserDto";

type UserDTO = {
  loginUserDto: LoginUserDTO;
  registerUserDto: RegisterUserDTO;
  updateUserDTO: UpdateUserDTO;
};

export default UserDTO;
