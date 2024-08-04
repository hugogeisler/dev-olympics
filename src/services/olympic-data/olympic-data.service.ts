import { CountryMedal } from "@models/CountryMedal";
import { OlympicDataConnector } from "./olympic-data.interface";
import { ContinentMedal } from "@models/ContinentMedlas";
import { splitByContinent } from "./utils/splitByContinent";

export class OlympicDataService {
    constructor(private readonly connector: OlympicDataConnector) {}

    // ----------------------------------------------------
    // Authentication methods
    // ----------------------------------------------------
    public async getMedalsByCountry(): Promise<CountryMedal[]> {
        return this.connector.getMedalsByCountry();
    }

    public async getMedalsByContinent(): Promise<ContinentMedal[]> {
        return splitByContinent(await this.connector.getMedalsByCountry());
    }
}
