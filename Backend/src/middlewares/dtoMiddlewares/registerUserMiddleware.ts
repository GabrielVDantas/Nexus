import { NextFunction, Request, Response } from "express";
import RegisterUserDTO from "../../dtos/userDtos/registerUserDto";
import AnaliseDtoService from "../../service/dtoService/dtoService";

const registerUserMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const registerUserDTO = new RegisterUserDTO();
  
  await AnaliseDtoService.fillDtoService(req, registerUserDTO);

  await AnaliseDtoService.validateDto(res, registerUserDTO);

  req.registerUserDto = registerUserDTO;

  next();
};

export default registerUserMiddleware;
