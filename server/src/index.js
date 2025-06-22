import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import channelRoute from "./routes/channel.route.js";
import connectDB from "./lib/db.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(express.json());

app.use("/api/channel", channelRoute);

const PORT = process.env.PORT || 5001;

app.listen(PORT, async () => {
  console.log(`server is running on port ${PORT}`);
  await connectDB();
});
