import BaseCarForm from "../../components/BaseCarForm.jsx";
import {useSelector} from "react-redux";

export default function EditCarForm() {
    const selectedCar = useSelector((state) => state.car.selectedCar);

    return (
        <>
            <BaseCarForm car={selectedCar}/>
        </>
    );
}