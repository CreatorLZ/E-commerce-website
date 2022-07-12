import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://acrossshop.herokuapp.com/api/"
})