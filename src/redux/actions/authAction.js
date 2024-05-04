import axios from "axios";
import {toast} from "react-toastify";
import {AppRoutes} from "../../utils/appRoutes.js";
import {setToken, setUser} from "../reducers/authReducer.js";
import {Privileges} from "../../utils/privileges.js";

export const login = (navigate, payload) => async (dispatch) => {
    const data = JSON.stringify(payload);
    const config = {
        method: "post",
        url: `${AppRoutes.BACKEND_BASE_API}/auth/login`,
        headers: {
            "Content-Type": "application/json",
        },
        data,
    };

    try {
        const response = await axios.request(config);
        const {data} = response.data;
        const {token, user} = data;

        dispatch(setToken(token));
        dispatch(setUser(user));

        toast.success("Login successful");
        navigate(AppRoutes.HOME);
    } catch (error) {
        resetAuthState(dispatch);
        toast.error(error?.response?.data?.message);
    }
}

const resetAuthState = (dispatch) => {
    dispatch(setToken(null));
    dispatch(setUser(null));
}

export const register = (navigate, payload) => async () => {
    const {email, password, confirmPassword, image, privilege} = payload;

    if (password !== confirmPassword) {
        toast.error("Passwords don't match");
        return;
    }

    let formData = new FormData();

    formData.append("email", email);
    formData.append("password", password);
    formData.append("privilege", privilege);

    if (image) {
        formData.append("image", image);
    }
    const token = localStorage.getItem("token");
    const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${AppRoutes.BACKEND_BASE_API}/auth/${privilege}/register`,
        headers: {
            'Authorization': (privilege === Privileges.ADMIN) ? `Bearer ${token}` : null,
        },
        data: formData,
    };

    try {
        await axios.request(config);
        toast.success("Register successful");
        navigate(AppRoutes.LOGIN);
    } catch (err) {
        toast.error(err?.response?.data?.message);
    }
}

export const logout = (navigate) => (dispatch) => {
    resetAuthState(dispatch);

    toast.success("Logout successful");
    navigate(AppRoutes.LOGIN);
}
