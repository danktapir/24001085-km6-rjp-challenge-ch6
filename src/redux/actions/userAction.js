import axios from "axios";
import {toast} from "react-toastify";
import {setUser} from "../reducers/authReducer.js";

export const getUserProfile = () => async (dispatch, getState) => {
    const state = getState();
    const token = state.auth.token;

    if (!token) {
        return;
    }

    const config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `${import.meta.env.VITE_BACKEND_BASE_API}/users/profile`,
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    try {
        const response = await axios.request(config);
        const {data} = response.data;
        dispatch(setUser(data));
    } catch (err) {
        dispatch(setUser(null));
        console.log("user profile error");
        toast.error(err?.response?.data?.message);
    }
}