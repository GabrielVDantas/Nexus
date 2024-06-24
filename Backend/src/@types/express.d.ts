import NewProjectDTO from "../dtos/projectDtos/newProjectDto";
import LoginUserDTO from "../dtos/userDtos/loginUserDto";
import RegisterUserDTO from "../dtos/userDtos/registerUserDto";
import UpdateUserDTO from "../dtos/userDtos/updateUserDto";
import User from "../models/User";

declare global {
    namespace Express {
        export interface Request {
            user: Partial<User>;
            registerUserDto: RegisterUserDTO;
            loginUserDto: LoginUserDTO;
            updateUserDTO: UpdateUserDTO;
            newProjectDTO: NewProjectDTO;
        }
    } 
}