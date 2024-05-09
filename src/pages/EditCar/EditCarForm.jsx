import BaseCarInputForm from "../../components/BaseCarInputForm.jsx";
import {useLocation} from "react-router-dom";
import {updateCar} from "../../redux/actions/carAction.js";

export default function EditCarForm() {
    const {state: selectedCar} = useLocation();

    return (
        <>
            <BaseCarInputForm car={selectedCar} submitHandler={updateCar}/>
        </>
    );
}