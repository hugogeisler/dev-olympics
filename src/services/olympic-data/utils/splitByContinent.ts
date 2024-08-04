import { ContinentMedal } from "@models/ContinentMedlas";
import { CountryMedal } from "@models/CountryMedal";
import countryContinentAttribution from "../mocks/country-continent-attribution.json";

const fixedMapCountryCode: Record<string, string> = {
    NED: "NLD",
    GER: "DEU",
    CRO: "HRV",
    SUI: "CHE",
    RSA: "ZAF",
    GUA: "GTM",
    PHI: "PHL",
    SLO: "SVN",
    GRE: "GRC",
    DEN: "DNK",
    FIJ: "FJI",
    MGL: "MNG",
    TPE: "TWN",
    GRN: "GRD",
    POR: "PRT",
};

export const splitByContinent = (medals: CountryMedal[]): ContinentMedal[] => {
    return medals
        .reduce<ContinentMedal[]>((acc, medal) => {
            const continentAttribution = countryContinentAttribution.find(
                (country) =>
                    country.Three_Letter_Country_Code === medal.noc ||
                    country.Three_Letter_Country_Code ===
                        fixedMapCountryCode[medal.noc]
            );

            if (!continentAttribution) {
                console.warn(
                    `Continent attribution not found for ${medal.noc}`
                );
                return acc;
            }

            const currentContinent = acc.find(
                (continent) =>
                    continent.continentCode ===
                    continentAttribution.Continent_Code
            );

            if (!currentContinent) {
                acc.push({
                    continentCode: continentAttribution.Continent_Code,
                    continentName: continentAttribution.Continent_Name,

                    gold: medal.gold,
                    silver: medal.silver,
                    bronze: medal.bronze,

                    total: medal.total,
                    rank: 0,
                });
            } else {
                currentContinent.gold += medal.gold;
                currentContinent.silver += medal.silver;
                currentContinent.bronze += medal.bronze;
                currentContinent.total += medal.total;
            }

            return acc;
        }, [])
        .sort((a, b) => b.total - a.total)
        .map((continent, index) => ({
            ...continent,
            rank: index + 1,
        }));
};
