import axios from 'axios';

import configs from '~/configs';
import { IAuth } from './authentication';

const auth = localStorage.getItem('R:auth');
const { REACT_APP_PUBLIC_URL } = configs;

let accessToken;

if (auth) {
	const parseAuth: IAuth = JSON.parse(auth);

	if (parseAuth.authenticated) {
		accessToken = parseAuth.accessToken;
	}
}

const serverAPI = axios.create({
	baseURL: `${REACT_APP_PUBLIC_URL}/api/v1`,
	headers: {
		Authorization: `Bearer ${accessToken}`,
	},
});

export default serverAPI;
