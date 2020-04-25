import jwt from 'jsonwebtoken';

import configs from '../configs';

const { SECRET_HASH } = configs;

export default function generateAccessToken(_id: string) {
	const accessToken = jwt.sign({ _id }, SECRET_HASH, {
		expiresIn: 86400,
	});

	return accessToken;
}
