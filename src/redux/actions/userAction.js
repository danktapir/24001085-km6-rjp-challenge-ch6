import axios from "axios";
import {toast} from "react-toastify";
import {setToken, setUser} from "../reducers/authReducer.js";
import {AppRoutes} from "../../utils/appRoutes.js";

export const getUserData = () => async (dispatch, getState) => {
    const state = getState();
    const token = state.auth.token;

    if (!token) {
        return;
    }

    const config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `${AppRoutes.BACKEND_BASE_API}/users/profile`,
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    try {
        const response = await axios.request(config);
        const {data} = response.data;
        dispatch(setUser(data));
    } catch (err) {
        resetAuthState(dispatch);
        console.log("user profile error");
        toast.error(err?.response?.data?.message);
    }
}

const resetAuthState = (dispatch) => {
    dispatch(setToken(null));
    dispatch(setUser(null));
}
