import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import { SERVER_PORT, MONGO_INITDB_DATABASE } from './configs/default.json';

const app = express();

mongoose.connect(`mongodb://mongodb:27017/${MONGO_INITDB_DATABASE}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/data', (req: Request, res: Response) =>
    res.status(200).json({ response: 'hello-world' })
);

app.listen(SERVER_PORT);
