import express from "express";
import regionRoutes from "./routes/regionRoutes.js"; // Adjust the import path if needed

const app = express();

// Middleware for parsing JSON and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mount the region routes on the app
app.use("/regions", regionRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
