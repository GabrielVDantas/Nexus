import { NextFunction, Request, Response } from "express";
import AnaliseDtoService from "../../service/dtoService/dtoService";
import NewProjectDTO from "../../dtos/projectDtos/newProjectDto";

const loginUserMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
    let newProjectDTO = new NewProjectDTO();

  await AnaliseDtoService.fillDtoService(req, newProjectDTO);

  await AnaliseDtoService.validateDto(res, newProjectDTO);

  req.newProjectDTO = newProjectDTO;

  next();
};

export default loginUserMiddleware;
