import {toast} from "react-toastify";
import axios from "axios";
import {setCars} from "../reducers/carReducer.js";

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
