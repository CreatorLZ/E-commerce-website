import axios from "axios";
<<<<<<< HEAD
import { axiosInstance } from "./config";

const BASE_URL = "https://acrossshop.herokuapp.com/api/";
=======

const BASE_URL = "http://localhost:5000/api/";
>>>>>>> b70c45f44ed9cbd06b2bed2a06eab9f8a10910b6
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

<<<<<<< HEAD
export const publicRequest = axiosInstance.create({
  baseURL: BASE_URL,
});

export const userRequest = axiosInstance.create({
=======
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
>>>>>>> b70c45f44ed9cbd06b2bed2a06eab9f8a10910b6
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});