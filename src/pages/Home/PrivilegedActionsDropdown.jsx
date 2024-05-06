import {DropdownButton} from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import {useNavigate} from "react-router-dom";
import {AppRoutes} from "../../utils/appRoutes.js";

export default function PrivilegedActionsDropdown() {
    const navigate = useNavigate();

    return (
        <>
            <DropdownButton id="dropdown-basic-button" title="Privileged Actions">
                <Dropdown.Item onClick={(event) => {
                    event.preventDefault();
                    navigate(AppRoutes.REGISTER_ADMIN);
                }}>Register Admin</Dropdown.Item>
                <Dropdown.Item>Add Car</Dropdown.Item>
            </DropdownButton>
        </>
    );
}