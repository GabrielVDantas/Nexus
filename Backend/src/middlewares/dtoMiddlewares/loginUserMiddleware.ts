import LoginUserDTO from "../../dtos/userDtos/loginUserDto";
import { NextFunction, Request, Response } from "express";
import AnaliseDtoService from "../../service/dtoService/dtoService";

const loginUserMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const loginUserDto = new LoginUserDTO();

  await AnaliseDtoService.fillDtoService(req, loginUserDto);

  await AnaliseDtoService.validateDto(res, loginUserDto);

  req.loginUserDto = loginUserDto;

  next();
};

export default loginUserMiddleware;
