import "bootstrap/dist/css/bootstrap.min.css"
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AppNavbar from "./components/AppNavbar.jsx";
import {AppRoutes} from "./utils/appRoutes.js";
import "react-toastify/dist/ReactToastify.css";
import {ToastContainer} from "react-toastify";
import Unprotected from "./components/Unprotected.jsx";
import {Provider} from "react-redux";
import store from "./redux/store.js";
import LoginPage from "./pages/Login/LoginPage.jsx";
import RegisterMemberPage from "./pages/Register/RegisterMemberPage.jsx";
import HomePage from "./pages/Home/HomePage.jsx";
import Protected from "./components/Protected.jsx";
import ProfilePage from "./pages/Profile/ProfilePage.jsx";
import CarDetailsPage from "./pages/CarDetails/CarDetailsPage.jsx";
import RegisterAdminPage from "./pages/Register/RegisterAdminPage.jsx";
import AddCarPage from "./pages/AddCar/AddCarPage.jsx";

const router = createBrowserRouter([
    {
        path: AppRoutes.HOME,
        element: (
            <>
                <Protected>
                    <AppNavbar/>
                    <HomePage/>
                </Protected>
            </>
        )
    },
    {
        path: AppRoutes.LOGIN,
        element: (
            <>
                <Unprotected>
                    <AppNavbar/>
                    <LoginPage/>
                </Unprotected>
            </>
        )
    },
    {
        path: AppRoutes.REGISTER_MEMBER,
        element: (
            <>
                <Unprotected>
                    <AppNavbar/>
                    <RegisterMemberPage/>
                </Unprotected>
            </>
        )
    },
    {
        path: AppRoutes.REGISTER_ADMIN,
        element: (
            <>
                <Protected>
                    <AppNavbar/>
                    <RegisterAdminPage/>
                </Protected>
            </>
        )
    },
    {
        path: AppRoutes.PROFILE,
        element: (
            <>
                <Protected>
                    <AppNavbar/>
                    <ProfilePage/>
                </Protected>
            </>
        )
    },
    {
        path: AppRoutes.CAR_DETAILS,
        element: (
            <>
                <Protected>
                    <AppNavbar/>
                    <CarDetailsPage/>
                </Protected>
            </>
        )
    },
    {
        path: AppRoutes.ADD_CAR,
        element: (
            <>
                <Protected>
                    <AppNavbar/>
                    <AddCarPage/>
                </Protected>
            </>
        )
    },
])

export default function App() {
    return (
        <>
            <Provider store={store}>
                <RouterProvider router={router}/>
                <ToastContainer theme={"colored"}/>
            </Provider>
        </>
    )
}
