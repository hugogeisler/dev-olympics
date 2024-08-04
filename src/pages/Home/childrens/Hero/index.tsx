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
            className="h-[100svh] w-full bg-primary relative overflow-hidden"
            id="hero-section"
        >
            <div className="wrapper w-full h-full bg-white flex justify-center items-center flex-col gap-[100px] px-[10px]">
                <h1 className="font-satoshi font-medium text-[2em] text-center">
                    Olympic medals per continent* in Paris 2024
                </h1>
                <OlympicResult ringRanks={ringRanks} />
                <div className="flex flex-col gap-[20px] items-center">
                    <p className="font-satoshi font-light text-[0.8em] text-center">
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
                    <p className="font-satoshi font-light text-center">
                        Source :{" "}
                        <a href="https://www.olympics.com/" target="_blank">
                            https://www.olympics.com/
                        </a>
                    </p>
                </div>
                <div className="absolute bottom-0 left-[50%] translate-x-[-50%] w-full h-[200px]">
                    <img
                        src={montainImage}
                        alt="Montain"
                        className="object-cover object-center h-full w-full opacity-20 grayscale"
                    />
                </div>
            </div>
        </div>
    );
};
