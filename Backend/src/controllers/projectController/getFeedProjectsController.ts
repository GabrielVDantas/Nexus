import { Request, Response } from "express";
import GetFeedProjectsService from "../../service/projectService/getFeedProjectsService";

class GeetFeedProjectsController {
  static async geetFeedProjectsController(req: Request, res: Response) {
    try {
      const feedProjects =
        await GetFeedProjectsService.getFeedProjectsService();
      return res
        .status(200)
        .json({ message: "Feed enviado com sucesso!", projects: feedProjects });
    } catch (error) {
      return res.status(500).json({
        message: "Algo deu errado, feed não será enviado!",
        error: error,
      });
    }
  }
}

export default GeetFeedProjectsController;
