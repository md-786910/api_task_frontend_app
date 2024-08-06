import axios from 'axios';
const devUrl = import.meta.env.VITE_APP_DEV_URL;
const prodUrl = import.meta.env.VITE_APP_PROD_URL;
const apiUrl = import.meta.env.VITE_APP_NODE_ENV === 'development' ? devUrl : prodUrl;

const user = JSON.parse(localStorage.getItem("task_overall"));
const instance = axios.create({
    baseURL: apiUrl,
    headers: { 'Authorization': `Bearer ${user?.token}` }

});

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // window.location.href = '/error';
    return Promise.reject(error);
});


export default instance;