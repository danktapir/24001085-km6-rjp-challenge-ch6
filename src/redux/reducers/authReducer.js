import {createSlice} from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        token: localStorage.getItem("token") || null,
        user: null,
    },
    reducers: {
        setToken: (state, action) => {
            if (action.payload) {
                localStorage.setItem("token", action.payload);
            } else {
                localStorage.removeItem("token");
            }
            state.token = action.payload;
        },
        setUser: (state, action) => {
            state.user = action.payload;
        }
    },
});

export const {setToken, setUser} = authSlice.actions;
export default authSlice.reducer;
