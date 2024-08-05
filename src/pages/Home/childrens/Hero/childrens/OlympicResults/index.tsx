import { ContinentMedal } from "@models/ContinentMedlas";
import { MedalsCount } from "./childrens/MedalCount";
import { OlympicRings } from "./childrens/OlympicRings";

type OlympicResultProps = {
    ringRanks: Record<string, ContinentMedal>;
};

export const OlympicResults: React.FC<OlympicResultProps> = ({ ringRanks }) => {
    if (!ringRanks || Object.keys(ringRanks).length !== 5) return;

    return (
        <div className="flex flex-col gap-[50px] max-sm:gap-[20px] mx-auto md:max-w-screen-lg w-full px-[20px]">
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
