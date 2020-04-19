import express, { Express, Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'

dotenv.config();

const app: Express = express();
const { MONGO_URL, PORT } = process.env;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/api/v1/data', (req: Request, res: Response) =>
    res.status(200).json({ response: 'hello-world' })
);

mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
}, err => {
    if (err) throw err;

    app.listen(PORT, () =>
        // tslint:disable-next-line: no-console
        console.log('The server has been started.')
    );
})
