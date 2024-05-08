export const CarTransmissions = {
    MANUAL: "manual",
    AUTOMATIC: "automatic",
};

export const getProperTransmissionName = (transmission) => {
    return transmission.charAt(0).toUpperCase() + transmission.substring(1);
}