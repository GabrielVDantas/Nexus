import { Request, Response } from "express";
import AnaliseDtoService from "../../service/dtoService/dtoService";

class BasicMiddleware {
  static async basicMiddlewareFunction(req: Request, res: Response, dto: any) {
    await AnaliseDtoService.fillDtoService(req, dto);

    await AnaliseDtoService.validateDto(res, dto);

    
  }
}

export default BasicMiddleware;
