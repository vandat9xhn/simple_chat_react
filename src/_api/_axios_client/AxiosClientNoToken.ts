import 'regenerator-runtime';
// 
import axios from "axios";


// 
const axiosClientNoToken = axios.create({
    baseURL: process.env.AXIOS_DJANGO,

})

export default axiosClientNoToken