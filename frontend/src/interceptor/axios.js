import axios from "axios";
import router from "../router";

let url = import.meta.env.VITE_BACKEND_URL;
axios.defaults.baseURL = url;
axios.defaults.withCredentials = true;

let refresh = false;

function clearCookie(){
    document.cookie = "refresh_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    document.cookie = "data_registrant=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
}

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
            clearCookie();
            router.push('/');
        }
    }
    
    if(error.response.data == "Admin Not Authenticated"){
        router.push('/dashboard')
    }else if(error.response.data == "Session Expired"){
        clearCookie();
        router.push('/')
    }

    refresh = false;
    return error;
})