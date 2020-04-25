import axios from 'axios';

import configs from '~/configs';
import { IAuth } from './authentication';

const { REACT_APP_PUBLIC_URL } = configs;
const auth = localStorage.getItem('R:auth');

let serverAPI = axios.create({
	baseURL: `${REACT_APP_PUBLIC_URL}/api/v1`,
});

if (auth) {
	const parseAuth: IAuth = JSON.parse(auth);

	if (parseAuth.authenticated) {
		serverAPI = axios.create({
			baseURL: `${REACT_APP_PUBLIC_URL}/api/v1`,
			headers: {
				Authorization: `Bearer ${parseAuth.accessToken}`,
			},
		});
	}
}

export default serverAPI;
