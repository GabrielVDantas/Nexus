import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

class LoginUserDTO {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(4)
  password: string;
}

export default LoginUserDTO;
