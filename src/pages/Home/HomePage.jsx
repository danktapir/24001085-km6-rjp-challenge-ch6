import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {fetchAllCars} from "../../redux/actions/carAction.js";
import CarCard from "./CarCard/CarCard.jsx";
import {toast} from "react-toastify";
import PrivilegedActionsDropdown from "./PrivilegedActionsDropdown.jsx";
import {Privileges} from "../../utils/privileges.js";
import {getUserData} from "../../redux/actions/userAction.js";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner.jsx";

export default function HomePage() {
    const carsData = useSelector((state) => state.car.carsData);
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchCars = async () => {
            setIsLoading(true);
            await dispatch(fetchAllCars());
            setIsLoading(false);
        };
        fetchCars().catch((err) => {
            toast.error(err.message);
        });
    }, [dispatch]);

    useEffect(() => {
        dispatch(getUserData());
    }, [dispatch]);

    return (
        <>
            <Container>
                {isLoading ? (
                    <LoadingSpinner/>
                ) : (
                    <>
                        {(user?.privilege === Privileges.ADMIN || user?.privilege === Privileges.SUPERADMIN) && (
                            <PrivilegedActionsDropdown user={user}/>
                        )}
                        {(carsData?.length > 0) ? (
                            <>
                                <Row className={"mt-4 g-4"} md={3} lg={4}>
                                    {carsData.map((car, idx) => {
                                        return (
                                            <Col key={idx}>
                                                <CarCard user={user} car={car}/>
                                            </Col>
                                        );
                                    })}
                                </Row>
                            </>
                        ) : (
                            <>
                                <h2 className={"mt-5"}>No cars found.</h2>
                            </>
                        )}
                    </>
                )}
            </Container>
        </>
    );
}