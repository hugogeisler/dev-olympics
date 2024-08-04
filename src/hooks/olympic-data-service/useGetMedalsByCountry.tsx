import { useEffect, useState } from "react";
import { useOlympicDataService } from "./useOlympicDataService";
import { CountryMedal } from "@models/CountryMedal";

export const useGetMedalsByCountry = () => {
    const [medals, setMedals] = useState<CountryMedal[]>([]);
    const appService = useOlympicDataService();

    useEffect(() => {
        async function fetchData() {
            const response = await appService.getMedalsByCountry();
            setMedals(response);
        }

        fetchData();
    }, [appService]);

    return {
        medals,
    };
};
