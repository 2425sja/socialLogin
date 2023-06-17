import express from "express";
import socialRouter from "./back/socialRouter";

const app = express();

app.set("view engine", "pug");
app.set("views", process.cwd() + `\\src\\front`);

app.use("/img", express.static("img"));
app.use("/", socialRouter);

export default app;
