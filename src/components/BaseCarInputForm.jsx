import {useState} from "react";
import {CarTransmissions} from "../utils/carTransmissions.js";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import Form from "react-bootstrap/Form";
import {Col, Row} from "react-bootstrap";
import ButtonWithLoadingSpinner from "./ButtonWithLoadingSpinner.jsx";

export default function BaseCarInputForm({car, submitHandler}) {
    const [model, setModel] = useState(car?.model ?? null);
    const [type, setType] = useState(car?.type ?? null);
    const [capacity, setCapacity] = useState(car?.capacity ?? 1);
    const [plate, setPlate] = useState(car?.plate ?? null);
    const [year, setYear] = useState(car?.year ?? 0);
    const [rentPerDay, setRentPerDay] = useState(car?.rentPerDay ?? 0);
    const [transmission, setTransmission] = useState(car?.transmission ?? CarTransmissions.MANUAL);
    const [image, setImage] = useState(car?.image ?? null);
    const [available, setAvailable] = useState(car?.available ?? true);
    const [description, setDescription] = useState(car?.description ?? "");
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onSubmit = async (event) => {
        event.preventDefault();

        setIsLoading(true);
        let payload = {
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
        };
        if (car?.id) {
            payload = {...payload, id: car?.id}
        }
        console.log(payload);
        await dispatch(submitHandler(navigate, payload));
        setIsLoading(false);
    }

    return (
        <>
            <Form onSubmit={onSubmit}>
                <Row>
                    <Col lg={6}>
                        <Form.Group className="mt-2">
                            <Form.Label>Model</Form.Label>
                            <Form.Control type={"text"} placeholder={"e.g. Navigator"} defaultValue={car?.model}
                                          onChange={(event) => setModel(event.target.value)}/>
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group className="mt-2">
                            <Form.Label>Type</Form.Label>
                            <Form.Control type={"text"} placeholder={"e.g. Minivan"} defaultValue={car?.type}
                                          onChange={(event) => setType(event.target.value)}/>
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col lg={6}>
                        <Form.Group className="mt-2">
                            <Form.Label>Capacity</Form.Label>
                            <Form.Control type={"number"} placeholder={"e.g. 4"} defaultValue={car?.capacity}
                                          onChange={(event) => setCapacity(parseInt(event.target.value))}/>
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group className="mt-2">
                            <Form.Label>Plate</Form.Label>
                            <Form.Control type={"text"} placeholder={"e.g. ABC-1010"} defaultValue={car?.plate}
                                          onChange={(event) => setPlate(event.target.value)}/>
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col lg={6}>
                        <Form.Group className="mt-2">
                            <Form.Label>Year</Form.Label>
                            <Form.Control type={"number"} placeholder={"e.g. 2010"} defaultValue={car?.year}
                                          onChange={(event) => setYear(parseInt(event.target.value))}/>
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group className="mt-2">
                            <Form.Label>Rent Per Day</Form.Label>
                            <Form.Control type={"number"} placeholder={"e.g. 50000"} defaultValue={car?.rentPerDay}
                                          onChange={(event) => setRentPerDay(parseInt(event.target.value))}/>
                        </Form.Group>
                    </Col>
                </Row>

                <Form.Group className="mt-2">
                    <Form.Label>Transmission</Form.Label>
                    <Form.Select aria-label="Default select example" defaultValue={car?.transmission ?? transmission}
                                 onChange={(event) => setTransmission(event.target.value)}>
                        <option value={CarTransmissions.MANUAL}>Manual</option>
                        <option value={CarTransmissions.AUTOMATIC}>Automatic</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group controlId="photoInput" className="mt-2">
                    <Form.Label>Photo</Form.Label>
                    {/*
                    ga bisa ngasih default value untuk input field type file :(
                    */}
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
                        value={"true"}
                        defaultChecked={!car ? true : available}
                        onChange={(event) => {
                            setAvailable((event.target.value === "true"));
                        }}
                    />
                    <Form.Check
                        inline
                        type="radio"
                        label="Not Available"
                        name="inlineRadioOptions"
                        id="inlineRadio2"
                        value={"false"}
                        defaultChecked={!car ? false : available}
                        onChange={(event) => {
                            setAvailable((event.target.value === "true"))
                        }}
                    />
                </Form.Group>

                <Form.Group className="mt-2">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        id={"description-field"}
                        as="textarea"
                        placeholder={"e.g. Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
                        defaultValue={car?.description}
                        onChange={(event) => setDescription(event.target.value)}
                    />
                </Form.Group>

                <ButtonWithLoadingSpinner isLoading={isLoading} buttonText={"Submit"}/>
            </Form>
        </>
    );
}