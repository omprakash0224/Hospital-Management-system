import express from "express";
import {config} from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import { dbConnect } from "./database/dbConnect.js";
import messageRouter from "./router/messageRouter.js";
import userRouter from "./router/userRouter.js";
import appointmentRouter from "./router/appointmentRouter.js"
import { errorMiddleware } from "./middleware/errorMiddleware.js";

const app = express();
config({path: "./config/config.env"})

app.use(cors({
    origin: [process.env.CLIENT_URL, process.env.DASHBOARD_URL, "https://medimeet-two.vercel.app", "https://admin-dashboard-omega-neon.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
}));

app.use("/api/v1/message", messageRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/appointment", appointmentRouter);

dbConnect();

app.use(errorMiddleware);

export default app;