import { Router } from "express";
import userRoutes from "./userRoutes";
import mailRoutes from "./mailRoutes";

const indexRouter = Router();

indexRouter.use(mailRoutes);
indexRouter.use(userRoutes);

export default indexRouter;