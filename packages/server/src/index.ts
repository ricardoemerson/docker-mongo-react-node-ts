import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import { SERVER_PORT } from './configs/default.json';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/api/v1/data', (req: Request, res: Response) =>
    res.status(200).json({ response: 'hello-world' })
);

async function main() {
    try {
        await mongoose.connect('mongodb://localhost/test', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        });

        app.listen(SERVER_PORT, () =>
            // tslint:disable-next-line: no-console
            console.log('The server has been started.')
        );
    } catch (err) {
        throw err;
    }
}

main();
