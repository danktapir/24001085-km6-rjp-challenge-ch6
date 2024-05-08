import BaseCarInputForm from "../../components/BaseCarInputForm.jsx";
import {useSelector} from "react-redux";

export default function EditCarForm() {
    const selectedCar = useSelector((state) => state.car.selectedCar);

    return (
        <>
            <BaseCarInputForm car={selectedCar}/>
        </>
    );
}