import {Card} from "react-bootstrap";
import placeholderPhoto from "../../../assets/placeholder_img.svg";
import Button from "react-bootstrap/Button";
import CarFeatures from "./CarFeatures.jsx";
import {useNavigate} from "react-router-dom";
import {AppRoutes} from "../../../utils/appRoutes.js";

export default function CarCard({props}) {
    const navigate = useNavigate();

    return (
        <>
            <Card className={"car-card"}>
                <Card.Img variant="top" height={"200px"} src={props.image ?? placeholderPhoto} fluid rounded/>
                <Card.Body>
                    <Card.Title
                        className={"mb-2"}>{`${props.model} / ${props.type}`}</Card.Title>
                    <Card.Subtitle className={"mb-3"}>{`Rp. ${props.rentPerDay} / hari`}</Card.Subtitle>
                    <CarFeatures capacity={props.capacity} transmission={props.transmission}
                                 year={props.year}/>
                </Card.Body>
                <Card.Footer>
                    <Button className={"w-100"} variant={"outline-primary"} onClick={(_) => {
                        navigate(AppRoutes.CAR_DETAILS)
                    }}>
                        View Full Details
                    </Button>
                </Card.Footer>
            </Card>
        </>
    );
}