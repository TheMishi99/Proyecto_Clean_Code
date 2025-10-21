import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { productsRouter, usersRouter } from "./routers";
import { FRONT_URL, PORT } from "./config";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    origin: [FRONT_URL],
    allowedHeaders: [
      "Authorization",
      "Content-Type",
      "X-Requested-With",
      "Accept",
      "Origin",
    ],
  })
);

app.get("/", (_req, res) => {
  res.send("Hello, World!");
});

app.get("/health", (_req, res) => {
  res.status(200).send("OK");
});

app.use("/products", productsRouter);
app.use("/users", usersRouter);

app.listen(PORT || 3000, () => {
  console.log(`Server is running on port ${PORT}`);
});
