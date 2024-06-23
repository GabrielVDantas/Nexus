import { NextFunction, Request, Response } from "express";
import UpdateUserDTO from "../../dtos/userDtos/updateUserDto";
import AnaliseDtoService from "../../service/dtoService/dtoService";

const updateUserMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const updateUserDTO = new UpdateUserDTO();

  await AnaliseDtoService.fillDtoService(req, updateUserDTO);

  await AnaliseDtoService.validateDto(res, updateUserDTO);

  req.updateUserDTO = updateUserDTO;

  next();
};

export default updateUserMiddleware;
