import { validate } from "class-validator";
import { Response, Request } from "express";

class AnaliseDtoService {
  static async validateDto(res: Response, dto: any) {
    const errors = await validate(dto);
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }
  }

  static async fillDtoService(req: Request, dto: any) {
    for (const data in req.body) {
      dto[data] = req.body[data];
    }
  }
}

export default AnaliseDtoService;
