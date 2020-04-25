import express, { Express } from 'express';
import cors from 'cors';

import configs from './configs';

import routes from './routes';
import('./database');

const app: Express = express();
const { PORT } = configs;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', routes);

app.listen(PORT || 8080, () =>
	// tslint:disable-next-line: no-console
	console.log('server started!')
);
