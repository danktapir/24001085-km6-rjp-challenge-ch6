import {Card, Col, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";

export default function BasePage({MainComponent, header}) {
    return (
        <Container>
            <Row className="mt-5">
                <Col md={6} className="offset-md-3">
                    <Card>
                        <Card.Header>{header}</Card.Header>
                        <Card.Body>
                            <MainComponent/>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
