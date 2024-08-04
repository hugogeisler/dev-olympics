import { useGetMedalsByContinent } from "@hooks/olympic-data-service/useGetMedalsByContinent";

export const Home: React.FC = () => {
    const { medals } = useGetMedalsByContinent();

    console.log(medals);

    return <div></div>;
};
