import { OlympicDataServicesContext } from "@hoc/olympic-data-service/OlympicDataContext";
import { useContext } from "react";

export const useOlympicDataService = () => {
    const services = useContext(OlympicDataServicesContext);

    if (services.olympicDataService === undefined)
        throw new Error("No service available.");
    return services.olympicDataService;
};
