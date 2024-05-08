import Form from "react-bootstrap/Form";
import {Image} from "react-bootstrap";
import placeholderPhoto from "../../assets/placeholder_img.svg";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getProperPrivilegeName} from "../../utils/privileges.js";

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
                <h2>Loading...</h2>
            ) : (
                <Form>
                    <Image className={"img-fluid"} src={user?.image ?? placeholderPhoto} rounded/>

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