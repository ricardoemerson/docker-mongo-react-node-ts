import { Router } from 'express';

const routes = Router();

routes.get('/user', (req, res) => {
	res.send({ success: true });
});

export default routes;
