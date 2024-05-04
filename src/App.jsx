import "bootstrap/dist/css/bootstrap.min.css"
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AppNavbar from "./components/Navbar/AppNavbar.jsx";
import {AppRoutes} from "./utils/appRoutes.js";
import "react-toastify/dist/ReactToastify.css";
import {ToastContainer} from "react-toastify";
import Unprotected from "./components/Unprotected.jsx";
import {Provider} from "react-redux";
import store from "./redux/store.js";
import LoginPage from "./pages/Login/LoginPage.jsx";
import RegisterPage from "./pages/Register/RegisterPage.jsx";
import HomePage from "./pages/Home/HomePage.jsx";
import Protected from "./components/Protected.jsx";
import ProfilePage from "./pages/Profile/ProfilePage.jsx";

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
        path: AppRoutes.REGISTER,
        element: (
            <>
                <Unprotected>
                    <AppNavbar/>
                    <RegisterPage/>
                </Unprotected>
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
    }
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
