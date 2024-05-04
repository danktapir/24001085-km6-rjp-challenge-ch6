import LoginForm from "./LoginForm.jsx";
import BasePage from "../../components/BasePage.jsx";

export default function LoginPage() {
  return (
      <BasePage MainComponent={LoginForm} header={"Login"}/>
  );
}
