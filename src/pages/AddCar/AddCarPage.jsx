import BasePage from "../../components/BasePage.jsx";
import AddCarForm from "./AddCarForm.jsx";

export default function AddCarPage() {
    return (
        <>
            <BasePage MainComponent={AddCarForm} header={"Add Car"}/>
        </>
    );
}