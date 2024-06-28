import { Request, Response } from "express";
import DeleteProjectService from "../../service/projectService/deleteProjectService";
import { Long } from "typeorm";

class DeleteProjectController {
  static async deleteProjectController(req: Request, res: Response) {
    const projectId = new Long(req.params.projectId);

    try {
        await DeleteProjectService.deleteProjectService(projectId);
    } catch (error) {
      return res.status(500).json({
        message: "Algo deu errado, projeto não será deletado!",
        error: error,
      });
    }
  }
}

export default DeleteProjectController;
