import LoginUserDTO from "../dtos/userDtos/loginUserDto";
import RegisterUserDTO from "../dtos/userDtos/registerUserDto";

declare global {
    namespace Express {
        export interface Request {
            registerUserDto: RegisterUserDTO;
            loginUserDto: LoginUserDTO;
        }
    } 
}