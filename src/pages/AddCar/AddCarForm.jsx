import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Col, Row} from "react-bootstrap";
import "./AddCarForm.css";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {addCar} from "../../redux/actions/carAction.js";
import {useNavigate} from "react-router-dom";
import {CarTransmissions} from "../../utils/carTransmissions.js";

export default function AddCarForm() {
    const [model, setModel] = useState(null);
    const [type, setType] = useState(null);
    const [capacity, setCapacity] = useState(1);
    const [plate, setPlate] = useState(null);
    const [year, setYear] = useState(null);
    const [rentPerDay, setRentPerDay] = useState(0);
    const [transmission, setTransmission] = useState(CarTransmissions.MANUAL);
    const [image, setImage] = useState();
    const [available, setAvailable] = useState(true);
    const [description, setDescription] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onSubmitHandler = async (event) => {
        event.preventDefault();

        setIsLoading(true);
        await dispatch(addCar(navigate, {
            model,
            type,
            capacity,
            plate,
            year,
            rentPerDay,
            transmission,
            image,
            available,
            description
        }));
        setIsLoading(false);
    }

    const onClearHandler = (event) => {
        event.preventDefault();
    }

    return (
        <>
            <Form onSubmit={onSubmitHandler}>
                <Row>
                    <Col lg={6}>
                        <Form.Group className="mt-2">
                            <Form.Label>Model</Form.Label>
                            <Form.Control type={"text"} placeholder={"e.g. Navigator"}
                                          onChange={(event) => setModel(event.target.value)}/>
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group className="mt-2">
                            <Form.Label>Type</Form.Label>
                            <Form.Control type={"text"} placeholder={"e.g. Minivan"}
                                          onChange={(event) => setType(event.target.value)}/>
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col lg={6}>
                        <Form.Group className="mt-2">
                            <Form.Label>Capacity</Form.Label>
                            <Form.Control type={"number"} placeholder={"e.g. 4"} min={1}
                                          onChange={(event) => setCapacity(parseInt(event.target.value))}/>
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group className="mt-2">
                            <Form.Label>Plate</Form.Label>
                            <Form.Control type={"text"} placeholder={"e.g. ABC-1010"}
                                          onChange={(event) => setPlate(event.target.value)}/>
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col lg={6}>
                        <Form.Group className="mt-2">
                            <Form.Label>Year</Form.Label>
                            <Form.Control type={"number"} placeholder={"e.g. 2010"}
                                          onChange={(event) => setYear(parseInt(event.target.value))}/>
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group className="mt-2">
                            <Form.Label>Rent Per Day</Form.Label>
                            <Form.Control type={"number"} placeholder={"e.g. 50000"}
                                          onChange={(event) => setRentPerDay(parseInt(event.target.value))}/>
                        </Form.Group>
                    </Col>
                </Row>

                <Form.Group className="mt-2">
                    <Form.Label>Transmission</Form.Label>
                    <Form.Select aria-label="Default select example" defaultValue={transmission}
                                 onSelect={(event) => setTransmission(event.target.value)}>
                        <option value={CarTransmissions.MANUAL}>Manual</option>
                        <option value={CarTransmissions.AUTOMATIC}>Automatic</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group controlId="photoInput" className="mt-2">
                    <Form.Label>Photo</Form.Label>
                    <Form.Control type="file" onChange={(event) => setImage(event.target.files[0])}/>
                </Form.Group>

                <Form.Group className="mt-2">
                    <Form.Label>Status</Form.Label>
                    <br/>
                    <Form.Check
                        inline
                        type="radio"
                        label="Available"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                        defaultChecked
                        onSelect={(_) => setAvailable(true)}
                    />
                    <Form.Check
                        inline
                        type="radio"
                        label="Not Available"
                        name="inlineRadioOptions"
                        id="inlineRadio2"
                        onSelect={(_) => setAvailable(false)}
                    />
                </Form.Group>

                <Form.Group className="mt-2">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        id={"description-field"}
                        as="textarea"
                        placeholder={"e.g. Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
                        onChange={(event) => setDescription(event.target.value)}
                    />
                </Form.Group>

                <Button className={"mt-3"} variant="primary" type="submit" disabled={isLoading}>
                    {isLoading ? "Processing..." : "Submit"}
                </Button>

            </Form>
        </>
    );
}