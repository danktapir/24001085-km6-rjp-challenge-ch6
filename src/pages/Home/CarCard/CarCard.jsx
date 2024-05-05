import {Card} from "react-bootstrap";
import placeholderPhoto from "../../../assets/placeholder_img.svg";
import Button from "react-bootstrap/Button";
import "./CarCard.css";

export default function CarCard({props}) {
    return (
        <>
            <Card className={"car-card"}>
                <Card.Img variant="top" height={"200px"} src={props.image ?? placeholderPhoto} fluid rounded/>
                <Card.Body>
                    <Card.Title className={"mb-2"}>{`${props.model} / ${props.type} / ${props.transmission}`}</Card.Title>
                    <Card.Subtitle>{`Rp. ${props.rentPerDay} / hari`}</Card.Subtitle>
                    <Card.Text className={"car-description mt-3 text-align-justify"}>
                        {(props.description) ? props.description : "No description provided for this car."}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button className={"w-100"} variant={"outline-primary"}>
                        View Details
                    </Button>
                </Card.Footer>
            </Card>
        </>
    );
}