import "./CarFeatures.css";

export default function CarFeatures({capacity, transmission, year}) {
    const getProperTransmissionName = () => {
        return transmission.charAt(0).toUpperCase() + transmission.substring(1);
    }

    return (
        <ul className="list-car-features">
            <li className="mb-3">
                <img
                    className="img-fluid"
                    src="../../../assets/fi_users.svg"
                />
                <p className="car-features">
                    {capacity} orang
                </p>
            </li>
            <li className="mb-3">
                <img
                    className="img-fluid"
                    src="../../../assets/fi_settings.svg"
                />
                <p className="car-features">
                    {getProperTransmissionName()}
                </p>
            </li>
            <li className="mb-3">
                <img
                    className="img-fluid"
                    src="../../../assets/fi_calendar.svg"
                />
                <p className="car-features">
                    Tahun {year}
                </p>
            </li>
        </ul>
    );
}