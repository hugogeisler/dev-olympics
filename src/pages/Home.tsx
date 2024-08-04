import { OlympicResult } from "@components/OlympicResult";
import { useGetMedalsByContinent } from "@hooks/olympic-data-service/useGetMedalsByContinent";
import { ContinentCode, ContinentMedal } from "@models/ContinentMedlas";

export const Home: React.FC = () => {
    const { medals } = useGetMedalsByContinent();

    const ringRanks = medals.reduce((acc, medal) => {
        acc[medal.continentCode as ContinentCode] = medal;
        return acc;
    }, {} as Record<ContinentCode, ContinentMedal>);

    return (
        <div>
            {medals.length > 0 && <OlympicResult ringRanks={ringRanks} />}
        </div>
    );
};
