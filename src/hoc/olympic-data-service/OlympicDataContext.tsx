import { OlympicDataService } from "@services/olympic-data/olympic-data.service";
import { createContext } from "react";

export type IOlympicDataServiceContext = {
    olympicDataService?: OlympicDataService;
};

export const OlympicDataServicesContext =
    createContext<IOlympicDataServiceContext>({});
