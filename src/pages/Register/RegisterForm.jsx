import Form from "react-bootstrap/Form";
import {useState} from "react";
import {Privileges} from "../../utils/privileges.js";
import {register} from "../../redux/actions/authAction.js";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import ButtonWithLoadingSpinner from "../../components/ButtonWithLoadingSpinner.jsx";
import GoogleLoginButton from "../../components/GoogleLoginButton.jsx";

export default function RegisterForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [privilege, setPrivilege] = useState(Privileges.MEMBER);
    const [image, setImage] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmitHandler = async (event) => {
        event.preventDefault();

        setIsLoading(true);
        await dispatch(register(navigate, {email, password, confirmPassword, privilege, image}));
        setIsLoading(false);
    }

    return (
        <Form onSubmit={onSubmitHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email"
                              onChange={(event) => setEmail(event.target.value)}/>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password"
                              onChange={(event) => setPassword(event.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password"
                              onChange={(event) => setConfirmPassword(event.target.value)}/>
            </Form.Group>

            <Form.Group controlId="photoInput" className="mb-3">
                <Form.Label>Photo</Form.Label>
                <Form.Control type="file" onChange={(event) => setImage(event.target.files[0])}/>
            </Form.Group>

            <div className={"mt-3"}>
                <ButtonWithLoadingSpinner isLoading={isLoading} buttonText={"Register"}/>
                <span className={"mx-2"}>or</span>
                <GoogleLoginButton text={"Register with Google"}/>
            </div>
        </Form>
    );
}
