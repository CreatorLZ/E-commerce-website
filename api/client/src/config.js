import axios from "axios";

export const axiosInstance = axios.create({
    baseURL : "https://acrossshop2.herokuapp.com/api/"
})