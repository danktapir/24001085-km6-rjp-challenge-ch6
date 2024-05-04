import BasePage from "../../components/BasePage.jsx";
import Profile from "./Profile.jsx";

export default function ProfilePage() {
    return (
        <BasePage MainComponent={Profile} header={"My Profile"}/>
    );
}