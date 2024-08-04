import { OlympicDataConnector } from "./olympic-data.interface";
import MedalsByCountry from "./mocks/get-medals-by-country.json";

export class OlympicDataInMemoryConnector implements OlympicDataConnector {
    constructor() {}

    // ----------------------------------------------------
    // Methods
    // ----------------------------------------------------
    public async getMedalsByCountry() {
        return MedalsByCountry;
    }
}
