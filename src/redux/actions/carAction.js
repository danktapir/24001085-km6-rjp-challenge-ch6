import {toast} from "react-toastify";
import axios from "axios";
import {setCars} from "../reducers/carReducer.js";

export const fetchAllCars = () => async (dispatch) => {
    const token = localStorage.getItem('token');
    const config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `/cars`,
        baseURL: `${import.meta.env.VITE_BACKEND_BASE_API}`,
        headers: {
            'Authorization': `Bearer ${token}`
        }
    };

    try {
        const response = await axios.request(config);
        const {data} = response.data;

        dispatch(setCars(data));
    } catch (err) {
        toast.error(err?.response?.data?.message);
    }
}
