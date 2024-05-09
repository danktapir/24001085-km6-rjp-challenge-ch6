import "./AddCarForm.css";
import BaseCarInputForm from "../../components/BaseCarInputForm.jsx";
import {addCar} from "../../redux/actions/carAction.js";

export default function AddCarForm() {
    return (
        <>
            <BaseCarInputForm submitHandler={addCar}/>
        </>
    );
}