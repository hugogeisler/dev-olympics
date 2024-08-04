import { ContinentMedal } from "@models/ContinentMedlas";

const MedalRepartition: React.FC<{
    medal: number;
    className?: string;
}> = ({ medal, className = "" }) => (
    <div className="gold flex flex-row justify-center items-center gap-[5px]">
        <span
            className={`indicator block w-[1em] h-[1em] rounded-[50%] ${className}`}
        ></span>
        <span className="result text-[1em]">{medal}</span>
    </div>
);

export const MedalsCount: React.FC<{
    continent: ContinentMedal;
    titleClassName?: string;
    medalsClassName?: string;
}> = ({ continent, titleClassName = "", medalsClassName = "" }) => (
    <div className="flex flex-col items-center justify-center w-[calc(100%/3)] font-chillax">
        <span className={`text-[2em] ${titleClassName}`}>
            {continent.continentName}: <b>{continent.total}</b>
        </span>
        <div className={`flex gap-[30px] flex-row ${medalsClassName}`}>
            <MedalRepartition
                medal={continent.gold}
                className="bg-gold-indicator"
            />
            <MedalRepartition
                medal={continent.silver}
                className="bg-silver-indicator"
            />
            <MedalRepartition
                medal={continent.bronze}
                className="bg-bronze-indicator"
            />
        </div>
    </div>
);
