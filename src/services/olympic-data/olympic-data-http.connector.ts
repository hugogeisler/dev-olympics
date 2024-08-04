import { CountryMedal } from "@models/CountryMedal";
import axios, { AxiosInstance } from "axios";
import { OlympicDataConnector } from "./olympic-data.interface";

export class OlympicDataHttpConnector implements OlympicDataConnector {
    public client: AxiosInstance;

    constructor(readonly baseURL: string, readonly timeout?: number) {
        this.client = this.initClient(baseURL, timeout || 3000);
    }

    // ----------------------------------------------------
    // Methods
    // ----------------------------------------------------
    public async getMedalsByCountry() {
        return this.client
            .get<CountryMedal[]>("/medals-table")
            .then((result) => result.data);
    }

    // ----------------------------------------------------
    // Private methods
    // ----------------------------------------------------
    /**
     * Initialize client
     */
    initClient = (baseURL: string, timeout: number) => {
        const client = axios.create({
            baseURL: baseURL,
            timeout: timeout,
            headers: {
                // "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
            },
        });

        client.interceptors.response.use(
            async (response) => response,
            async (error) => Promise.reject(error)
        );

        return client;
    };
}
