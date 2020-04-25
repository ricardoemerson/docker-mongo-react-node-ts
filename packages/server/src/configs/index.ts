import dotenv from 'dotenv';

dotenv.config();

const { MONGO_URL, SECRET_HASH, PORT } = process.env;

export default {
	MONGO_URL,
	SECRET_HASH,
	PORT,
};
