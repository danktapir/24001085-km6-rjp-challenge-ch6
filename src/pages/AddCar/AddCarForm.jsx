import "./AddCarForm.css";
import BaseCarForm from "../../components/BaseCarForm.jsx";
import {addCar} from "../../redux/actions/carAction.js";

export default function AddCarForm() {
    return (
        <>
            <BaseCarForm submitHandler={addCar}/>
        </>
    );
}