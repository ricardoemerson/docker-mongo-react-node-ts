import express, { Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
require("dotenv").config();

const app = express();

mongoose.connect("mongodb://mongodb:27017/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/data", (req: Request, res: Response) =>
    res.status(200).json({ data: "hello-world" })
);

app.listen(8080, () => console.log("listening on 8080"));
