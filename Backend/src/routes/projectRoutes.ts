import { Router } from "express";
import GeetFeedProjectsController from "../controllers/projectController/getFeedProjectsController";
import NewProjectController from "../controllers/projectController/newProjectController";
import upload from "../middlewares/multerMiddleware";
import UpdateProjectController from "../controllers/projectController/updateProjectController";
import DeleteProjectController from "../controllers/projectController/deleteProjectController";

const projectRoutes = Router();

projectRoutes.get(
  "/feed-projects",
  GeetFeedProjectsController.geetFeedProjectsController
);

projectRoutes.post("/new-project", NewProjectController.newProjectController);

projectRoutes.put(
  "/update-project/:projectId",
  upload.single("coverArt"),
  upload.array("screenshots"),
  UpdateProjectController.updateProjectController
);

projectRoutes.delete(
  "/delete-project/:projectId",
  DeleteProjectController.deleteProjectController
);

export default projectRoutes;
