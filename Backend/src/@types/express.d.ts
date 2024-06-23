import LoginUserDTO from "../dtos/userDtos/loginUserDto";
import RegisterUserDTO from "../dtos/userDtos/registerUserDto";
import User from "../models/User";

declare global {
    namespace Express {
        export interface Request {
            user: Partial<User>;
            registerUserDto: RegisterUserDTO;
            loginUserDto: LoginUserDTO;
            updateUserDTO: UpdateUserDTO;
        }
    } 
}