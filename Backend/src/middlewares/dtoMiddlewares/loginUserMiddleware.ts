import { validate } from "class-validator";
import LoginUserDTO from "../../dtos/userDtos/loginUserDto";
import { NextFunction, Request, Response } from "express";

const loginUserMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
    const loginUserDto = new LoginUserDTO();
    loginUserDto.email = req.body.email;
    loginUserDto.password = req.body.password;

    const errors = await validate(loginUserDto);
    if (errors.length > 0) {
        return res.status(400).json({errors});
    }

    req.loginUserDto = loginUserDto;

    next();
};

export default loginUserMiddleware;
