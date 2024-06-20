import RegisterUserDTO from "../dtos/userDTOs/registerUserDTO";

declare global {
    namespace Express {
        export interface Request {
            registerUserDto: RegisterUserDTO;
        }
    } 
}