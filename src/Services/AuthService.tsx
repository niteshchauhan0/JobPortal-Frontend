import axiosInstance from "../Interceptor/AxiosInterceptor";
const base_url = "http://localhost:8080/auth/"
const loginUser = async (login:any)=> {
    return axiosInstance.post(`${base_url}login`, login)
        .then((result:any) => result.data)
        .catch((error:any) =>{throw error;});
}

export {loginUser};