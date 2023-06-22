import express from "express";
import { home, naverLogin } from "./socialCtrl";
const socialRouter = express.Router();

socialRouter.get("/", home);

socialRouter.get("/", naverLogin);

export default socialRouter;
