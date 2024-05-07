import BasePage from "../../components/BasePage.jsx";
import EditCarForm from "./EditCarForm.jsx";

export default function EditCarPage() {
    return (
        <>
            <BasePage MainComponent={EditCarForm} header={"Edit Car"}/>
        </>
    );
}