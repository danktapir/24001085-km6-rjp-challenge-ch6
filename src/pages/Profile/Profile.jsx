import Form from "react-bootstrap/Form";
import {Image} from "react-bootstrap";
import placeholderImage from "../../../public/assets/placeholder_img.svg";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getProperPrivilegeName} from "../../utils/privileges.js";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner.jsx";

export default function Profile() {
    const user = useSelector((state) => state.auth.user);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        if (user) {
            setIsLoading(false);
        }
    }, [user]);

    return (
        <>
            {isLoading ? (
                <LoadingSpinner/>
            ) : (
                <Form>
                    <Image className={"img-fluid"} src={user?.image ?? placeholderImage} rounded/>

                    <Form.Group className="mb-3 mt-2" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control disabled placeholder={user?.email}/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Privilege</Form.Label>
                        <Form.Control disabled placeholder={getProperPrivilegeName(user?.privilege)}/>
                    </Form.Group>
                </Form>
            )}
        </>
    );
}