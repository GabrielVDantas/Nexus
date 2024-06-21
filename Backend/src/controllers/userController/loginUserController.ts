import { Request, Response } from "express";
import RegisterUserService from "../../service/userService/registerUserService";

class LoginUserController {
    static async loginUserController(req: Request, res: Response) {
        const loginUserData = req.loginUserDto;
        try {
            const loginUser = await RegisterUserService.registerUserService(loginUserData);
            res.status(201).json({user: loginUser});
        } catch (error) {
            res.status(500).json({message: "Algo deu errado, usuário não será registrado!"})
        }
    }
}

export default LoginUserController;