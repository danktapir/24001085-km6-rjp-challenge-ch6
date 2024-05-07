import {createSlice} from "@reduxjs/toolkit";

const carSlice = createSlice({
    name: "car",
    initialState: {
        carsData: [],
        selectedCar: null,
    },
    reducers: {
        setCars: (state, action) => {
            state.carsData = action.payload;
        },
        addCars: (state, action) => {
            state.carsData.push(action.payload);
        },
        setSelectedCar: (state, action) => {
            state.selectedCar = action.payload;
        }
    },
});

export const {setCars, addCars, setSelectedCar, deleteCar} = carSlice.actions;
export default carSlice.reducer;
