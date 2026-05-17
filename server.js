import express from "express";
import userRouter from "./src/router/userRouter.js";

const app = express();
const PORT = 8000;
//!make post data available in req.body
app.use(express.json());

app.use("/api/v1/users", userRouter);
app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`server is running at http://localhost:${PORT}`);
  }
});
