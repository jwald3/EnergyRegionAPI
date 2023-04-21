import express from "express";
import regionRoutes from "./routes/regionRoutes.js";

const app = express();

app.use(express.json());
app.use("/regions", regionRoutes);

const port = process.env.PORT || 3000;

export { app, port };
