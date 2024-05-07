import {toast} from "react-toastify";
import axios from "axios";
import {addCars, setCars, setSelectedCar} from "../reducers/carReducer.js";
import {AppRoutes} from "../../utils/appRoutes.js";

export const fetchAllCars = () => async (dispatch) => {
    const token = localStorage.getItem('token');
    const config = {
        method: 'get',
        maxBodyLength: Infinity,
        baseURL: `${import.meta.env.VITE_BACKEND_BASE_API}/cars`,
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

export const deleteCar = (carId) => async (dispatch, getState) => {
    const state = getState();
    const carsData = state.car.carsData;
    const token = localStorage.getItem('token');
    const config = {
        method: 'delete',
        maxBodyLength: Infinity,
        url: `${import.meta.env.VITE_BACKEND_BASE_API}/cars/${carId}`,
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    };

    try {
        await axios.request(config);
        const updatedCarsData = carsData.filter(car => car.id !== carId);
        dispatch(setCars(updatedCarsData));

        toast.success("Deletion car successful");
    } catch (err) {
        toast.error(err?.response?.data?.message);
    }
}

export const updateSelectedCar = (car) => (dispatch) => {
    dispatch(setSelectedCar(car));
}

export const addCar = (navigate, payload) => async (dispatch, getState) => {
    const state = getState();
    const token = state.auth.token;

    if (!token) {
        return;
    }

    const formData = validateInputFields(payload);

    if (!formData) {
        return;
    }

    const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${AppRoutes.BACKEND_BASE_API}/cars`,
        headers: {
            'Authorization': `Bearer ${token}`,
        },
        data: formData
    };

    try {
        const response = await axios.request(config);
        const {data} = response.data;
        dispatch(addCars(data));

        toast.success("Added car successfully");
        navigate(AppRoutes.HOME);
    } catch (err) {
        toast.error(err?.response?.data?.message);
    }
}

const validateInputFields = (payload) => {
    if (!payload.image) {
        delete payload.image;
    }
    if (!payload.description) {
        delete payload.description;
    }

    const formData = new FormData();

    for (let field in payload) {
        if (!payload[field]) {
            toast.error(`Field ${field} must be filled!`);
            return null;
        }
        formData.append(field, payload[field]);
    }
    return formData;
}