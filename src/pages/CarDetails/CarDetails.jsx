import Form from "react-bootstrap/Form";
import "./CarDetails.css";
import {useLocation} from "react-router-dom";
import placeholderImage from "../../../public/assets/placeholder_img.svg";
import {Col, Image, Row} from "react-bootstrap";
import {getProperTransmissionName} from "../../utils/carTransmissions.js";

export default function CarDetails() {
    const {state: selectedCar} = useLocation();

    return (
        <>
            <Form>
                <Image id={"car-img"} src={selectedCar?.image ?? placeholderImage} fluid rounded/>

                <Row className="mt-3">
                    <Col lg={6}>
                        <Form.Group>
                            <Form.Label>Model</Form.Label>
                            <Form.Control placeholder={selectedCar?.model} disabled/>
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group>
                            <Form.Label>Type</Form.Label>
                            <Form.Control placeholder={selectedCar?.type} disabled/>
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mt-2">
                    <Col lg={6}>
                        <Form.Group>
                            <Form.Label>Plate</Form.Label>
                            <Form.Control placeholder={selectedCar?.plate} disabled/>
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group>
                            <Form.Label>Year</Form.Label>
                            <Form.Control placeholder={selectedCar?.year} disabled/>
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mt-2">
                    <Col lg={6}>
                        <Form.Group>
                            <Form.Label>Capacity</Form.Label>
                            <Form.Control placeholder={selectedCar?.capacity} disabled/>
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group>
                            <Form.Label>Rent Per Day</Form.Label>
                            <Form.Control placeholder={selectedCar?.rentPerDay} disabled/>
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mt-2">
                    <Col lg={6}>
                        <Form.Group>
                            <Form.Label>Transmission</Form.Label>
                            <Form.Control placeholder={getProperTransmissionName(selectedCar?.transmission)} disabled/>
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group>
                            <Form.Label>Status</Form.Label>
                            <Form.Control placeholder={selectedCar?.available ? "Available" : "Not Available"}
                                          disabled/>
                        </Form.Group>
                    </Col>
                </Row>

                <Form.Group className="mt-2">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        id={"description-field"}
                        as="textarea"
                        placeholder={(selectedCar?.description) ? selectedCar?.description : "No description provided for this car."}
                        disabled
                    />
                </Form.Group>
            </Form>
        </>
    );
}