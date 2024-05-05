import {Col, Image, Row} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import {useSelector} from "react-redux";
import placeholderPhoto from "../../assets/placeholder_img.svg";

export default function CarDetails() {
    const selectedCar = useSelector(state => state.car.selectedCar);

    const getProperTransmissionName = () => {
        return selectedCar.transmission.charAt(0).toUpperCase() + selectedCar.transmission.substring(1);
    }

    return (
        <>
            <Form>
                <Image src={selectedCar?.image ?? placeholderPhoto} fluid rounded/>
                <Form.Group className="mt-2">
                    <Form.Label>Model</Form.Label>
                    <Form.Control placeholder={selectedCar?.model} disabled/>
                </Form.Group>

                <Form.Group className="mt-2">
                    <Form.Label>Type</Form.Label>
                    <Form.Control placeholder={selectedCar?.type} disabled/>
                </Form.Group>

                <Form.Group className="mt-2">
                    <Form.Label>Plate</Form.Label>
                    <Form.Control placeholder={selectedCar?.plate} disabled/>
                </Form.Group>

                <Form.Group className="mt-2">
                    <Form.Label>Capacity</Form.Label>
                    <Form.Control placeholder={selectedCar?.capacity} disabled/>
                </Form.Group>

                <Form.Group className="mt-2">
                    <Form.Label>Transmission</Form.Label>
                    <Form.Control placeholder={getProperTransmissionName()} disabled/>
                </Form.Group>

                <Form.Group className="mt-2">
                    <Form.Label>Year</Form.Label>
                    <Form.Control placeholder={selectedCar?.year} disabled/>
                </Form.Group>

                <Form.Group className="mt-2">
                    <Form.Label>Rent Per Day</Form.Label>
                    <Form.Control placeholder={selectedCar?.rentPerDay} disabled/>
                </Form.Group>
            </Form>
        </>
    );
}