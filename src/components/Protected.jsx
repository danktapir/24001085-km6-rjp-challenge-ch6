import {useEffect} from "react";
import {AppRoutes} from "../utils/appRoutes.js";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

/**
 * apply this component to routes (or pages) that require authorization
 */
export default function Protected({children}) {
    const token = useSelector((state) => state.auth.token);
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate(AppRoutes.LOGIN);
        }
    }, [navigate, token]);

    return children;
}
