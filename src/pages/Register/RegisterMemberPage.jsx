import BasePage from "../../components/BasePage.jsx";
import RegisterForm from "./RegisterForm.jsx";

export default function RegisterMemberPage() {
    return (
        <BasePage MainComponent={RegisterForm} header={"Register Member"}/>
    );
}
