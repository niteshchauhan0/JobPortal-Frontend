import axiosInstance from "../Interceptor/AxiosInterceptor";
const base_url = "https://jobportal-backend-zwsk.onrender.com/auth/"
const loginUser = async (login:any)=> {
    return axiosInstance.post(`${base_url}login`, login)
        .then((result:any) => result.data)
        .catch((error:any) =>{throw error;});
}

export {loginUser};