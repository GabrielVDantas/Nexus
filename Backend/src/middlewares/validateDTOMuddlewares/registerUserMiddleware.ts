import { NextFunction, Request, Response } from "express";
import { validate } from "class-validator";
import RegisterUserDTO from "../../dtos/userDtos/registerUserDto";

const registerUserMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const registerUserDTO = new RegisterUserDTO();
  registerUserDTO.username = req.body.username;
  registerUserDTO.email = req.body.email;
  registerUserDTO.password = req.body.password;
  registerUserDTO.photo = req.body.photo;
  registerUserDTO.ownDescription = req.body.ownDescription;

  const errors = await validate(registerUserDTO);
  if (errors.length > 0) {
    return res.status(400).json({errors});
  }

  req.registerUserDto = registerUserDTO;

  next();
};

export default registerUserMiddleware;
