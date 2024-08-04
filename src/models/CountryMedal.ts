export type CountryMedal = {
    /**
     * Country code (NOC)
     * @example "USA", "FRA", etc.
     */
    noc: string;

    /**
     * Country name
     * @example "United States", "France", etc.
     */
    description: string;

    /**
     * Country name
     * @example "United States", "France", etc.
     */
    longDescription: string;
    rank: number;
    sortRank: number;
    rankTotal: number;
    sortTotalRank: number;
    nocSlug: string;
    gold: number;
    silver: number;
    bronze: number;
    total: number;
    disciplines: null;
};
