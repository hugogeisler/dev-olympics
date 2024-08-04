import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export const SmoothScrollLayout: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const lenis = new Lenis({
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });

    // useEffect(() => {
    //     window.onbeforeunload = function () {
    //         window.scrollTo(0, 0);
    //     };
    // });

    return <>{children}</>;
};
