import axios from "axios";
import store from "./store";
import router from "./router";

// Defines the baseUrl based on the .env file
const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api` 
})

// The interceptor.request function is executed before a request is made
axiosClient.interceptors.request.use( config => {
    config.headers.Authorization = `Bearer ${store.state.user.token}}` 
    return config
})

// The interceptor.response function is executed after a request is made
// Two callback functions are passed, the first one, for fulfilled resquest and the second one, for rejected request
axiosClient.interceptors.response.use( response => {
        return response
    }, error => {
        console.log('axiosClient.interceptors error:', error);
        if (error.response.status === 401) {
            // User is unauthorized 
            sessionStorage.removeItem('TOKEN')
            router.push({name: 'login'})
        }
        console.error(error);
    }
)  

export default axiosClient;