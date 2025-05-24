// import axiosInstance from "../Interceptor/AxiosInterceptor";
// const base_url = "https://jobportal-backend-zwsk.onrender.com/auth/"
// const loginUser = async (login:any)=> {
//     return axiosInstance.post(`${base_url}login`, login)
//         .then((result:any) => result.data)
//         .catch((error:any) =>{throw error;});
// }

// export {loginUser};

import axiosInstance from "../Interceptor/AxiosInterceptor";

const loginUser = async (login: any) => {
    try {
        const result = await axiosInstance.post(`/auth/login`, login);
        return result.data;
    } catch (error: any) {
        console.error("Login error:", error.response || error.message);
        throw error;
    }
};

export { loginUser };
