import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import userRoute from "./routes/users.router.js";
import movieRoute from "./routes/movies.router.js";
import categoryRoute from "./routes/categories.router.js";
import { errorHandler } from "./middlewares/error.middleware.js";

dotenv.config();
const app = express();

// connect DB
connectDB();
app.use(cors());
app.use(express.json());
app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("Api is running!");
});

// routes
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
app.use("/api/categories", categoryRoute);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
