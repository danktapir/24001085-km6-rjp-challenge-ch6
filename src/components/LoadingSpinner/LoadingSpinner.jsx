import {Spinner} from "react-bootstrap";
import "./LoadingSpinner.css";

export default function LoadingSpinner() {
    return (
        <>
            <div id={"loading-spinner"}>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        </>
    );
}