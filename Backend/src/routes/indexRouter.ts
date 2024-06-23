import { Router } from "express";
import userRoutes from "./userRoutes";
import mailRoutes from "./mailRoutes";
import projectRoutes from "./projectRoutes";

const indexRouter = Router();

indexRouter.use(mailRoutes);
indexRouter.use(userRoutes);
indexRouter.use(projectRoutes);

export default indexRouter;