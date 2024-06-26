import { Request, Response } from "express";
import DeleteProjectService from "../../service/projectService/deleteProjectService";

class DeleteProjectController {
  static async deleteProjectController(req: Request, res: Response) {
    const projectId = req.params.projectId as any;

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
