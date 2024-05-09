import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {login} from "../../redux/actions/authAction.js";
import {useDispatch} from "react-redux";
import ButtonWithLoadingSpinner from "../../components/ButtonWithLoadingSpinner.jsx";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onSubmitHandler = async (event) => {
        event.preventDefault();

        setIsLoading(true);
        await dispatch(login(navigate, {email, password}));
        setIsLoading(false);
    }

    return (
        <Form onSubmit={onSubmitHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email}
                              onChange={(event) => setEmail(event.target.value)}/>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password}
                              onChange={(event) => setPassword(event.target.value)}/>
            </Form.Group>

            <ButtonWithLoadingSpinner isLoading={isLoading} buttonText={"Login"}/>
        </Form>
    );
}
