import {loginFailure, loginStart, loginSuccess} from "./userRedux";
import axios from "axios";
<<<<<<< HEAD
import { axiosInstance } from "../config";
=======
>>>>>>> b70c45f44ed9cbd06b2bed2a06eab9f8a10910b6

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try{
<<<<<<< HEAD
        const res = await axiosInstance.post("/auth/login", user);
=======
        const res = await axios.post("/auth/login", user);
>>>>>>> b70c45f44ed9cbd06b2bed2a06eab9f8a10910b6
        dispatch(loginSuccess(res.data));

    } catch (err) {
        dispatch (loginFailure());
    }
}