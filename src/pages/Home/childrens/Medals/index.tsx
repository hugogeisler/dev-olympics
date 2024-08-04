import { useGSAP } from "@gsap/react";
import "./style.scss";
import { useGetMedalsByCountry } from "@hooks/olympic-data-service/useGetMedalsByCountry";
import gsap from "gsap";
import { CountryMedal } from "@models/CountryMedal";
import { getFlagAccordingCountry } from "@utils/get-flag-according-country";

const MedalRow: React.FC<{
    medal: CountryMedal;
}> = ({ medal }) => {
    return (
        <div className="table-row text-center">
            <div className="table-cell font-bold">{medal.rank}</div>
            <div className="table-cell text-left">{medal.description}</div>
            <div className="table-cell">
                {getFlagAccordingCountry(medal.noc)}
            </div>
            <div className="table-cell font-bold">{medal.gold}</div>
            <div className="table-cell">{medal.silver}</div>
            <div className="table-cell">{medal.bronze}</div>
            <div className="table-cell">{medal.total}</div>
        </div>
    );
};

export const Medals: React.FC = () => {
    const { medals } = useGetMedalsByCountry();

    useGSAP(() => {
        if (!medals || medals.length === 0) return;

        document.querySelectorAll(".table-row").forEach((row, index) => {
            gsap.fromTo(
                row,
                {
                    opacity: 0,
                    yPercent: 10,
                    border: "none",
                },
                {
                    opacity: 1,
                    yPercent: 0,
                    scrollTrigger: {
                        trigger: row,
                        start: "top 80%",
                        end: "bottom top",
                    },
                    duration: 0.5,
                    ...(index < medals.length && {
                        borderBottom: "1px solid #7d84c2",
                    }),
                }
            );
        });
    }, [medals]);

    return (
        <div className="h-full w-full mb-[20px]">
            <h1 className="bg-primary text-white font-paris font-bold text-[3em] text-center py-[20px] translate-y-[-1px]">
                MEDALS
            </h1>
            <div className="table w-full max-w-screen-sm mx-auto mt-[20px] px-[20px] font-satosh border-collapse font-satoshi max-sm:text-[3vw]">
                <div className="table-header table-row font-bold text-center">
                    <div className="table-cell"></div>
                    <div className="table-cell text-left">Country</div>
                    <div className="table-cell"></div>
                    <div className="table-cell">Gold</div>
                    <div className="table-cell">Silver</div>
                    <div className="table-cell">Bronze</div>
                    <div className="table-cell">Total</div>
                </div>
                {medals.map((medal, index) => (
                    <MedalRow key={`medal-row-${index}`} medal={medal} />
                ))}
            </div>
        </div>
    );
};
