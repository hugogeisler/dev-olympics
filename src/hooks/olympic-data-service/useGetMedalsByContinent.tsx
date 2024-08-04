import { useEffect, useState } from "react";
import { useOlympicDataService } from "./useOlympicDataService";
import { ContinentMedal } from "@models/ContinentMedlas";

export const useGetMedalsByContinent = () => {
    const [medals, setMedals] = useState<ContinentMedal[]>([]);
    const appService = useOlympicDataService();

    useEffect(() => {
        async function fetchData() {
            const response = await appService.getMedalsByContinent();
            setMedals(response);
        }

        fetchData();
    }, [appService]);

    return {
        medals,
    };
};
