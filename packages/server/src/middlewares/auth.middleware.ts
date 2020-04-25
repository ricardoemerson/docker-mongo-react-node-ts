import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

import configs from '../configs';

const { SECRET_HASH } = configs;

export default function AuthMiddleware(
	req: Request,
	res: Response,
	next: NextFunction
) {
	const authHeader = req.headers.authorization;

	if (!authHeader) {
		return res.status(401).json({ message: 'No token provived.' });
	}

	const parts = authHeader.split(' ');

	if (parts.length !== 2) {
		return res.status(401).json({ message: 'Token error' });
	}

	const [schema, token] = parts;

	if (!/^Bearer$/i.test(schema)) {
		return res.status(401).json({ message: 'Token malformatted' });
	}

	jwt.verify(token, SECRET_HASH, (err, decoded) => {
		if (err) {
			return res.status(401).json({ message: 'Invalid token' });
		}

		req._id = (decoded as any)._id;

		return next();
	});
}
