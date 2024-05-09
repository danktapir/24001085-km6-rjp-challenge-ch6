import {Spinner} from "react-bootstrap";
import Button from "react-bootstrap/Button";

export default function ButtonWithLoadingSpinner({isLoading, buttonText}) {
    return (
        <>
            <Button className={"mt-3"} variant="primary" type="submit" disabled={isLoading}>
                {isLoading ? (
                    <>
                        <Spinner
                            className={"me-2"}
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />
                        <span>Processing...</span>
                    </>
                ) : (
                    <span>{buttonText}</span>
                )}
            </Button>
        </>
    );
}