import { CountryMedal } from "@models/CountryMedal";

export interface OlympicDataConnector {
    getMedalsByCountry(): Promise<CountryMedal[]>;
}
