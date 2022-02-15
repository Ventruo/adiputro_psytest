import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
    state () {
        return {
            access_token: "-"
        }
    },
    mutations: {
        change_access_token (state, access_token ) {
            state.access_token = access_token;
        },
        refresh_access_token (state, refresh_token) {
            axios.post('http://127.0.0.1:8888/api/auth/refresh',{
                refresh_token: refresh_token,
            })
            .then((response) => {
                state.access_token = response.data.access_token;
            });

            // if error go back to login
        }
    },
});