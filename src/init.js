import app from "./server";
import "dotenv/config"

const port = 4002;
const handleListening = () => {
  console.log("server connected!");
};

app.listen(port, handleListening);
