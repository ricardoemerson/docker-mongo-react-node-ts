import axios from 'axios';

import { baseURL } from '~/configs/default.json';

const serverAPI = axios.create({ baseURL });

export default serverAPI;
