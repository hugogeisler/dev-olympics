import mascotteImage from "@assets/images/mascotte.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const Footer: React.FC = () => {
    useGSAP(() => {
        const footerTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".footer-wrapper",
                start: "top bottom",
                end: "bottom top",
            },
        });

        // Reveal the mascotte
        footerTimeline.fromTo(
            ".footer-wrapper",
            {
                opacity: 0,
                scale: 0.9,
                yPercent: 10,
            },
            {
                opacity: 1,
                yPercent: 0,
                duration: 1,
                scale: 1,
            },
            0
        );
    });

    return (
        <div className="max-md:h-[40vh] h-[20vh] w-full bg-primary flex justify-center items-center">
            <div className="footer-wrapper w-[10vh] h-[10vh] max-sm:w-[15vh] max-sm:h-[15vh]">
                <img
                    src={mascotteImage}
                    alt="mascotte"
                    className="object-cover object-center h-full w-full"
                />
            </div>
        </div>
    );
};
