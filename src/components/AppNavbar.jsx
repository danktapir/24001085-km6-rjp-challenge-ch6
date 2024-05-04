import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {AppRoutes} from "../utils/appRoutes.js";
import {useDispatch, useSelector} from "react-redux";
import {getUserProfile} from "../redux/actions/userAction.js";
import {logout} from "../redux/actions/authAction.js";

export default function AppNavbar() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.user);

    useEffect(() => {
        dispatch(getUserProfile());
    }, [dispatch]);

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand>Kampus Merdeka 6</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {user && (
                            <Nav.Link as={Link} to={AppRoutes.HOME}>Home</Nav.Link>
                        )}
                        {user ? (
                            <>
                                <Nav.Link as={Link} to={AppRoutes.PROFILE}>Profile</Nav.Link>
                                <Nav.Link as={Link} onClick={() => dispatch(logout(navigate))}>Logout</Nav.Link>
                            </>
                        ) : (
                            <>
                                <Nav.Link as={Link} to={AppRoutes.LOGIN}>Login</Nav.Link>
                                <Nav.Link as={Link} to={AppRoutes.REGISTER}>Register</Nav.Link>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
