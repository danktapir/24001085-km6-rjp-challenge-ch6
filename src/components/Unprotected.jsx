import {useEffect} from "react";
import {AppRoutes} from "../utils/appRoutes.js";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

/**
 * apply this component to routes (or pages) that don't require authorization
 */
export default function Unprotected({children}) {
    const {token} = useSelector((state) => state.auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            navigate(AppRoutes.HOME);
        }
    }, [navigate, token]);

    return children;
}