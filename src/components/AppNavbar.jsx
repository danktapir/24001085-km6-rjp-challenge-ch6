import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUserData} from "../redux/actions/userAction.js";
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Image} from "react-bootstrap";
import {AppRoutes} from "../utils/appRoutes.js";
import {logout} from "../redux/actions/authAction.js";

export default function AppNavbar() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.user);

    useEffect(() => {
        dispatch(getUserData());
    }, [dispatch, user]);

    const expand = "lg";

    return (
        <Navbar key={expand} expand={expand} className="bg-body-secondary mb-3">
            <Container>
                <Navbar.Brand as={Link} to={AppRoutes.HOME}>
                    <Image className={"me-3"} src={"/vite.svg"} alt={"Vite Logo"}/>
                    Vite Cars
                </Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}/>
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${expand}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Image src={"/vite.svg"} alt={"Vite Logo"} className={"me-3"}/>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                            Vite Cars
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 me-3">
                            {user ? (
                                <>
                                    <Nav.Link as={Link} to={AppRoutes.HOME}>Home</Nav.Link>
                                    <Nav.Link as={Link} to={AppRoutes.PROFILE}>My Profile</Nav.Link>
                                    <Nav.Link as={Link} onClick={(_) => dispatch(logout(navigate))}>Logout</Nav.Link>
                                </>
                            ) : (
                                <>
                                    <Nav.Link as={Link} to={AppRoutes.LOGIN}>Login</Nav.Link>
                                    <Nav.Link as={Link} to={AppRoutes.REGISTER_MEMBER}>Register</Nav.Link>
                                </>
                            )}
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}
