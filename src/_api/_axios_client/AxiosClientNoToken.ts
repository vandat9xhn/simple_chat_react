import 'regenerator-runtime';
import axios from 'axios';
// 
import { IS_DJANGO_API } from '../_const/ConstAPI';

//
const axiosClientNoToken = axios.create({
    baseURL: IS_DJANGO_API ? process.env.AXIOS_DJANGO : process.env.HEROKU_API,
});

export default axiosClientNoToken;
