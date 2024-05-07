import BasePage from "../../components/BasePage.jsx";
import RegisterForm from "./RegisterForm.jsx";

export default function RegisterAdminPage() {
    return (
        <>
            <BasePage MainComponent={RegisterForm} header={"Register Admin"}/>
        </>
    );
}