import { NextFunction, Request, Response } from "express";
import UpdateProjectDTO from "../../dtos/projectDtos/updateProjectDTO";
import AnaliseDtoService from "../../service/dtoService/dtoService";

const updateProjectMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let updateProjectDTO = new UpdateProjectDTO();

  await AnaliseDtoService.fillDtoService(req, updateProjectDTO);

  await AnaliseDtoService.validateDto(res, updateProjectDTO);

  req.updateProjectDTO = updateProjectDTO;

  next();
};

export default updateProjectMiddleware;
