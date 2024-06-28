import axios from "axios";
let axiosInstance = axios.create({
    baseURL: "https://dummyjson.com",
});
axiosInstance.interceptors.request.use(request => {
    request.headers.set("Content-Type", "application/json");
    return request;
})
const getAllUsers = async () => {
    return await axiosInstance.get('/users').then((response) => {return response.data});
}

let getPostOUserById = async (id: number) => {
    return await axiosInstance.get('/users/'+id+'/posts').then((response) => {return response.data})
}
export {getAllUsers, getPostOUserById};

