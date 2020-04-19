import axios from 'axios';

import configs from '~/configs';

const { REACT_APP_PUBLIC_URL } = configs;

const serverAPI = axios.create({ baseURL: `${REACT_APP_PUBLIC_URL}/api/v1` });

export default serverAPI;
