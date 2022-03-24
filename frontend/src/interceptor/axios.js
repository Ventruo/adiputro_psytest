import axios from "axios";
import router from "../router";

let url = import.meta.env.VITE_BACKEND_URL;
axios.defaults.baseURL = url;
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
            router.push('/');
        }
    }

    refresh = false;
    return error;
})