import axios from "axios";
import {toast} from "react-toastify";
import {AppRoutes} from "../../utils/appRoutes.js";
import {setToken, setUser} from "../reducers/authReducer.js";
import {Privileges} from "../../utils/privileges.js";

export const login = (navigate, payload) => async (dispatch) => {
    const config = {
        method: "post",
        url: `${AppRoutes.BACKEND_BASE_API}/auth/login`,
        headers: {
            "Content-Type": "application/json",
        },
        data: payload,
    };

    try {
        const response = await axios.request(config);
        const {data} = response.data;
        const {token, user} = data;

        dispatch(setToken(token));
        dispatch(setUser(user));

        toast.success("Logged in successfully");
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

export const register = (navigate, payload) => async (getState) => {
    const {email, password, confirmPassword, image} = payload;

    if (password !== confirmPassword) {
        toast.error("Passwords do not match");
        return;
    }

    let formData = new FormData();

    formData.append("email", email);
    formData.append("password", password);

    if (image) {
        formData.append("image", image);
    }

    const state = getState();
    const token = state.auth.token;
    let privilege;

    /**
     * kalo ada token, berarti pengen register admin
     * kalo ga ada, pengen register member
     */
    if (token) {
        formData.append("privilege", Privileges.ADMIN);
        privilege = Privileges.ADMIN;
    } else {
        formData.append("privilege", Privileges.MEMBER);
        privilege = Privileges.MEMBER;
    }

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
        toast.success("Registered successfully");
        navigate(AppRoutes.LOGIN);
    } catch (err) {
        toast.error(err?.response?.data?.message);
    }
}

export const logout = (navigate) => (dispatch) => {
    resetAuthState(dispatch);

    toast.success("Logged out successfully");
    navigate(AppRoutes.LOGIN);
}
