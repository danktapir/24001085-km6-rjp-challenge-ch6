import {Card} from "react-bootstrap";
import placeholderImage from "../../../../public/assets/placeholder_img.svg";
import Button from "react-bootstrap/Button";
import CarFeatures from "./CarFeatures.jsx";
import {useNavigate} from "react-router-dom";
import {AppRoutes} from "../../../utils/appRoutes.js";
import {Privileges} from "../../../utils/privileges.js";
import {useState} from "react";
import DeleteCarModal from "../DeleteCarModal.jsx";

export default function CarCard({user, car}) {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const handleCloseModal = () => setShow(false);
    const handleShowModal = () => setShow(true);

    return (
        <>
            <Card className={"car-card"}>
                <Card.Img variant="top" height={"200px"} src={car?.image ?? placeholderImage} fluid rounded/>
                <Card.Body>
                    <Card.Title
                        className={"mb-2"}>{`${car?.model} / ${car?.type}`}</Card.Title>
                    <Card.Subtitle className={"mb-3"}>{`Rp. ${car?.rentPerDay} / hari`}</Card.Subtitle>
                    <CarFeatures capacity={car?.capacity} transmission={car?.transmission}
                                 year={car?.year}/>
                </Card.Body>
                <Card.Footer>
                    <Button className={"w-100"} variant={"outline-primary"} onClick={(event) => {
                        event.preventDefault();
                        navigate(AppRoutes.CAR_DETAILS, {state: car});
                    }}>
                        View Full Details
                    </Button>
                    {(user?.privilege === Privileges.ADMIN || user?.privilege === Privileges.SUPERADMIN) && (
                        <>
                            <Button className={"w-100 mt-2"} variant={"outline-success"} onClick={(event) => {
                                event.preventDefault();
                                navigate(AppRoutes.EDIT_CAR, {state: car});
                            }}>
                                Edit
                            </Button>
                            <Button className={"w-100 mt-2"} variant={"outline-danger"} onClick={handleShowModal}>
                                Delete
                            </Button>
                            <DeleteCarModal carId={car?.id} isShowing={show} handleClose={handleCloseModal}
                                            handleShow={handleShowModal}/>
                        </>
                    )}
                </Card.Footer>
            </Card>
        </>
    );
}