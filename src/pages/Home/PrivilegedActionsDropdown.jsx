import {DropdownButton} from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import {useNavigate} from "react-router-dom";
import {AppRoutes} from "../../utils/appRoutes.js";
import {Privileges} from "../../utils/privileges.js";

export default function PrivilegedActionsDropdown({user}) {
    const navigate = useNavigate();

    return (
        <>
            <DropdownButton id="dropdown-basic-button" title="Privileged Actions">
                {(user?.privilege === Privileges.SUPERADMIN) && (
                    <>
                        <Dropdown.Item onClick={(event) => {
                            event.preventDefault();
                            navigate(AppRoutes.REGISTER_ADMIN);
                        }}>Register Admin</Dropdown.Item>
                    </>
                )}
                <Dropdown.Item>Add Car</Dropdown.Item>
            </DropdownButton>
        </>
    );
}