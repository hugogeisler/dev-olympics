import { ContinentMedal } from "@models/ContinentMedlas";
import { MedalsCount } from "./MedalCount";
import { OlympicRings } from "./OlympicRings";

type OlympicResultProps = {
    ringRanks: Record<string, ContinentMedal>;
};

export const OlympicResult: React.FC<OlympicResultProps> = ({ ringRanks }) => {
    return (
        <div className="flex flex-col gap-[50px] mx-auto md:max-w-screen-lg px-[20px]">
            <div className="w-full flex justify-around">
                <MedalsCount
                    continent={ringRanks.EU}
                    titleClassName="text-ring-blue"
                />
                <MedalsCount
                    continent={ringRanks.AF}
                    titleClassName="text-ring-black"
                />
                <MedalsCount
                    continent={ringRanks.AM}
                    titleClassName="text-ring-red"
                />
            </div>
            <OlympicRings ringRanks={ringRanks} />
            <div className="w-full flex justify-center">
                <MedalsCount
                    continent={ringRanks.AS}
                    titleClassName="text-ring-yellow"
                />
                <MedalsCount
                    continent={ringRanks.OC}
                    titleClassName="text-ring-green"
                />
            </div>
        </div>
    );
};
