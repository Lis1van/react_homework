import axios from "axios";
import {IUser} from "../models/IUser";
import {IPost} from "../models/IPost";
let axiosInstance = axios.create({
    baseURL: "https://dummyjson.com",
});
axiosInstance.interceptors.request.use(request => {
    request.headers.set("Content-Type", "application/json");
    return request;
})
const getAllUsers = async ():Promise<{users: IUser[]}> => {
    return await axiosInstance.get<{users: IUser[]}>('/users').then((response) => {return response.data});
}

let getPostOUserById = async (id: number): Promise<{posts: IPost[]}> => {
    return await axiosInstance.get<{posts: IPost[]}>('/users/'+id+'/posts').then((response) => {return response.data})
}
export {getAllUsers, getPostOUserById};

