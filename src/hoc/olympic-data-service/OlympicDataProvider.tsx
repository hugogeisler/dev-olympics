import {
    IOlympicDataServiceContext,
    OlympicDataServicesContext,
} from "./OlympicDataContext";
import { useMemo } from "react";

export type OlympicServicesProviderProps = {
    children: React.ReactNode;
    services: IOlympicDataServiceContext;
};

export const OlympicDataServicesProvider: React.FC<
    OlympicServicesProviderProps
> = ({ children, services }) => {
    const contextValue = useMemo(() => {
        return services;
    }, [services]);

    return (
        <OlympicDataServicesContext.Provider value={contextValue}>
            {children}
        </OlympicDataServicesContext.Provider>
    );
};
