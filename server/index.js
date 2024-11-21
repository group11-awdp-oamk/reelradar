import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import {userRouter} from './routers/userRouter.js'
import reviewRouter from "./routers/reviewRouter.js";

dotenv.config()
const PORT = process.env.PORT;

const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/user', userRouter)
app.use("/reviews", reviewRouter);
app.use("/api/reviews", reviewRouter);


app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500
  res.status(statusCode).json({error: err.message})
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
