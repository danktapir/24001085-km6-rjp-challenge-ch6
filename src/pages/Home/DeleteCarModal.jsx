import Button from "react-bootstrap/Button";
import {Modal} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {deleteCar} from "../../redux/actions/carAction.js";
import {useNavigate} from "react-router-dom";
import {AppRoutes} from "../../utils/appRoutes.js";

export default function DeleteCarModal({carId, isShowing, handleClose, handleShow}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <>
            <Modal show={isShowing} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Car Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete this car?
                </Modal.Body>
                <Modal.Footer>
                    <Button className={"px-4"} variant="outline-primary" onClick={handleClose}>
                        No
                    </Button>
                    <Button className={"px-4"} variant="outline-danger" onClick={(event) => {
                        event.preventDefault();
                        dispatch(deleteCar(carId)).then((_) => {
                            handleClose();
                        });
                    }}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}