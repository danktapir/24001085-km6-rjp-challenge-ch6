import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Col, Row} from "react-bootstrap";
import "./AddCarForm.css";

export default function AddCarForm() {
    const onSubmitHandler = (event) => {
        event.preventDefault();
    }

    return (
        <>
            <Form onSubmit={onSubmitHandler}>
                <Row>
                    <Col lg={6}>
                        <Form.Group className="mt-2">
                            <Form.Label>Model</Form.Label>
                            <Form.Control type={"text"} placeholder={"e.g. Navigator"}/>
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group className="mt-2">
                            <Form.Label>Type</Form.Label>
                            <Form.Control type={"text"} placeholder={"e.g. Minivan"}/>
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col lg={6}>
                        <Form.Group className="mt-2">
                            <Form.Label>Capacity</Form.Label>
                            <Form.Control type={"number"} placeholder={"e.g. 4"} min={1}/>
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group className="mt-2">
                            <Form.Label>Plate</Form.Label>
                            <Form.Control type={"text"} placeholder={"e.g. ABC-1010"}/>
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col lg={6}>
                        <Form.Group className="mt-2">
                            <Form.Label>Year</Form.Label>
                            <Form.Control type={"number"} placeholder={"e.g. 2010"}/>
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group className="mt-2">
                            <Form.Label>Rent Per Day</Form.Label>
                            <Form.Control type={"number"} placeholder={"e.g. 50000"}/>
                        </Form.Group>
                    </Col>
                </Row>

                <Form.Group className="mt-2">
                    <Form.Label>Transmission</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option value="manual">Manual</option>
                        <option value="automatic">Automatic</option>
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
                    />
                    <Form.Check
                        inline
                        type="radio"
                        label="Not Available"
                        name="inlineRadioOptions"
                        id="inlineRadio2"
                    />
                </Form.Group>

                <Form.Group className="mt-2">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        id={"description-field"}
                        as="textarea"
                        placeholder={"e.g. Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
                    />
                </Form.Group>

                <Button className={"mt-3"} variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    );
}