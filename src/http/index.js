import axios from 'axios';
//   TODO
// put the BASE_URL into .env
// const API_URL = 'http://localhost:8000';

const api = axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_API_URL,
    withCredentials: true,
    headers: {
        "Content-Type": 'application/json',
        Accept: 'application/json',
    }
});

// List of all the endpoints
export const sendOtp = (data) => {
    return api.post('/api/v1/send-otp', data);
}
export const verifyOtp = (data) => {
    return api.post('/api/v1/verify-otp', data);
}
export const activate = (data) => {
    return api.post('/api/v1/activate', data);
}
export const logout = (data) => {
    return api.post('/api/v1/logout', data);
}
// interceptors
/*
Axios interceptors allow us to run our code or modify the request or response before the request is sent or after the response is received. This can be useful for handling global tasks like authentication, logging, error handling, etc., without repeating the same logic in every HTTP request.
*/

api.interceptors.response.use(
    (config) => {
        return config
    },
    async (error) => {
        console.log("interceptor called");
        const originalRequest = error.config;

        if (error.response.status === 401 &&
            originalRequest &&
            !originalRequest._isRetry) {
            originalRequest.isRetry = true;
            try {
                const response = await axios.get(`${import.meta.env.VITE_REACT_APP_API_URL}/api/v1/refresh`,
                    {
                        withCredentials: true
                    });
                return api.request(originalRequest);
            } catch (error) {
                console.log("object", error);
            }
            throw error;
        }

    })


export default api;