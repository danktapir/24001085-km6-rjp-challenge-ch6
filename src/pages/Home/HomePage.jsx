import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {fetchAllCars} from "../../redux/actions/carAction.js";
import CarCard from "./CarCard/CarCard.jsx";
import {toast} from "react-toastify";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function HomePage() {
    const carsData = useSelector((state) => state.car.carsData);
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

    return (
        <>
            <Container>
                <Form>
                    <Row className={"g-2"}>
                        <Col md={4} lg={4}>
                            <Form.Control
                                type="search"
                                placeholder="Search by car's model name..."
                                aria-label="Search"
                            />
                        </Col>
                        <Col>
                            <Button variant="outline-primary">Search</Button>
                        </Col>
                    </Row>
                </Form>
                {isLoading ? (
                    <h2>Loading...</h2>
                ) : (
                    <Row className={"mt-4 g-4"} md={3} lg={4}>
                        {carsData.map((car, idx) => {
                            return (
                                <Col key={idx}>
                                    <CarCard props={car}/>
                                </Col>
                            );
                        })}
                    </Row>
                )}
            </Container>
        </>
    );
}