import express from "express";
import socialRouter from "./back/socialRouter";
import path from "path";
// var path = require("path");

const app = express();

app.set("views", path.join(__dirname, "front"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

// app.use(express.static(__dirname + `/front`));
// app.set("view engine", "pug");
// app.set("views", process.cwd() + `/src/front`);

app.use("/img", express.static("img"));
app.use("/", socialRouter);

export default app;
