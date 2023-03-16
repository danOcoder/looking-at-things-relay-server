require("dotenv").config();
import express from "express";
import cors from "cors";
import routes from "./routes";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use("/", routes);

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
