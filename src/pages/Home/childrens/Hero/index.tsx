import { OlympicResult } from "@pages/Home/childrens/Hero/childrens/OlympicRings/childrens/OlympicResult";
import { useGetMedalsByContinent } from "@hooks/olympic-data-service/useGetMedalsByContinent";
import { ContinentCode, ContinentMedal } from "@models/ContinentMedlas";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import montainImage from "@assets/images/mont-blanc.png";

export const Hero: React.FC = () => {
    const { medals } = useGetMedalsByContinent();

    const ringRanks = medals.reduce((acc, medal) => {
        acc[medal.continentCode as ContinentCode] = medal;
        return acc;
    }, {} as Record<ContinentCode, ContinentMedal>);

    useGSAP(() => {
        gsap.to("#hero-section>.wrapper", {
            scale: 0.9,
            borderRadius: "20px",
            scrollTrigger: {
                trigger: "#hero-section",
                start: "top top",
                end: "+=500px",
                scrub: true,
                pin: true,
            },
        });
    });

    return (
        <div
            className="h-screen w-full bg-primary relative overflow-hidden"
            id="hero-section"
        >
            <div className="wrapper w-full h-full bg-white flex justify-around items-center flex-col px-[20px]">
                <h1 className="font-satoshi font-medium text-[2em] max-sm:text-[6vw] text-center">
                    Olympic medals per continent* in Paris 2024
                </h1>
                <OlympicResult ringRanks={ringRanks} />
                <div className="flex flex-col gap-[20px] items-center">
                    <p className="font-satoshi font-light text-[0.8em] max-sm:text-[3vw] text-center">
                        * The composition of nations by continent and their
                        subregions is bases on UN's "macro geographical
                        (continental) regions". which can be found in :{" "}
                        <a
                            href="https://unstats.un.org/unsd/methodology/m49/"
                            target="_blank"
                        >
                            https://unstats.un.org/unsd/methodology/m49/
                        </a>
                    </p>
                    <p className="font-satoshi font-light text-center max-sm:text-[4vw]">
                        Source :{" "}
                        <a href="https://www.olympics.com/" target="_blank">
                            https://www.olympics.com/
                        </a>
                    </p>
                </div>
                <div className="absolute bottom-0 left-[50%] translate-x-[-50%] w-full h-[200px] max-sm:h-[100px]">
                    <img
                        src={montainImage}
                        alt="Montain"
                        className="max-2xl:object-cover max-2xl:object-center object-scale-down h-full w-full opacity-20 grayscale"
                    />
                </div>
            </div>
        </div>
    );
};
