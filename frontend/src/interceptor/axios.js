import axios from "axios";
import router from "../router";

axios.defaults.baseURL = "http://127.0.0.1:8888/api";
axios.defaults.withCredentials = true;

let refresh = false;

axios.interceptors.response.use(resp => resp, async error => {
    if(error.response.status === 401 && !refresh) {
        refresh = true;
        const {status, data} = await axios.post('/auth/refresh', {}, {
            withCredentials: true
        });

        if (status == 200) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;

            return axios(error.config);
        }else{
            router.push('/login');
        }
    }

    refresh = false;
    return error;
})