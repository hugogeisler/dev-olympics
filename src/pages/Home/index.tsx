import { Medals } from "./childrens/Medals";
import { Hero } from "./childrens/Hero";
import { Footer } from "./childrens/Footer";

export const Home: React.FC = () => {
    return (
        <main>
            <Hero />
            <Medals />
            <Footer />
        </main>
    );
};
