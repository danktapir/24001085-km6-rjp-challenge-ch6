import Button from "react-bootstrap/Button";
import {useGoogleLogin} from "@react-oauth/google";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {loginWithGoogle} from "../redux/actions/authAction.js";

export default function GoogleLoginButton({text}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onPressHandler = useGoogleLogin({
        onSuccess: (codeResponse) =>
            dispatch(loginWithGoogle(navigate, codeResponse.access_token)),
    });

    return (
        <>
            <Button variant={"secondary"} onClick={() => onPressHandler()}>
                {text}
            </Button>
        </>
    );
}
