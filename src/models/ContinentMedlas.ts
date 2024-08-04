export type ContinentCode = "EU" | "AS" | "AM" | "OC" | "AF";

export type ContinentMedal = {
    continentCode: ContinentCode;
    continentName: string;

    gold: number;
    silver: number;
    bronze: number;

    total: number;
    rank: number;
};
