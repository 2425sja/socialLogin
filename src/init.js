import app from "./server";

const port = 4002;
const handleListening = () => {
  console.log("server connected!");
};

app.listen(port, handleListening);
