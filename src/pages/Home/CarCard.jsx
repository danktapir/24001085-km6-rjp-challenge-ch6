import {Card, CardText} from "react-bootstrap";
import placeholderPhoto from "../../assets/placeholder_img.svg";

export default function CarCard({props}) {
    return (
        <>
            <Card style={{width: '18rem'}}>
                <Card.Img variant="top" className={"img-fluid"} src={props.image ?? placeholderPhoto} rounded/>
                <Card.Body>
                    <Card.Title>{`${props.model} / ${props.type}`}</Card.Title>
                    <Card.Subtitle>{`Rp. ${props.rentPerDay} / hari`}</Card.Subtitle>
                    <Card.Text>
                        {(props.description) ? props.description : "No description provided for this car."}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}