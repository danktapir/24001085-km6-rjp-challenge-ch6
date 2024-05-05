import BasePage from "../../components/BasePage.jsx";
import CarDetails from "./CarDetails.jsx";

export default function CarDetailsPage() {
    return (
        <>
            <BasePage MainComponent={CarDetails} header={"Car Details"}/>
        </>
    );
}