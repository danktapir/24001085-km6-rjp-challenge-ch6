import {Card} from "react-bootstrap";
import placeholderPhoto from "../../../assets/placeholder_img.svg";
import Button from "react-bootstrap/Button";
import CarFeatures from "./CarFeatures.jsx";
import {useNavigate} from "react-router-dom";
import {AppRoutes} from "../../../utils/appRoutes.js";
import {useDispatch} from "react-redux";
import {Privileges} from "../../../utils/privileges.js";
import {useState} from "react";
import DeleteCarModal from "../DeleteCarModal.jsx";
import {updateSelectedCar} from "../../../redux/actions/carAction.js";

export default function CarCard({user, car}) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Card className={"car-card"}>
                <Card.Img variant="top" height={"200px"} src={car?.image ?? placeholderPhoto} fluid rounded/>
                <Card.Body>
                    <Card.Title
                        className={"mb-2"}>{`${car?.model} / ${car?.type}`}</Card.Title>
                    <Card.Subtitle className={"mb-3"}>{`Rp. ${car?.rentPerDay} / hari`}</Card.Subtitle>
                    <CarFeatures capacity={car?.capacity} transmission={car?.transmission}
                                 year={car?.year}/>
                </Card.Body>
                <Card.Footer>
                    <Button className={"w-100"} variant={"outline-primary"} onClick={(_) => {
                        dispatch(updateSelectedCar(car));
                        navigate(AppRoutes.CAR_DETAILS);
                    }}>
                        View Full Details
                    </Button>
                    {(user.privilege === Privileges.ADMIN || user.privilege === Privileges.SUPERADMIN) && (
                        <>
                            <Button className={"w-100 mt-2"} variant={"outline-success"} onClick={(_) => {
                                dispatch(updateSelectedCar(car));
                                navigate(AppRoutes.EDIT_CAR);
                            }}>
                                Edit
                            </Button>
                            <Button className={"w-100 mt-2"} variant={"outline-danger"} onClick={handleShow}>
                                Delete
                            </Button>
                            <DeleteCarModal carId={car?.id} isShowing={show} handleClose={handleClose}
                                            handleShow={handleShow}/>
                        </>
                    )}
                </Card.Footer>
            </Card>
        </>
    );
}