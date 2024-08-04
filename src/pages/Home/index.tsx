import { Details } from "./childrens/Details";
import { Hero } from "./childrens/Hero";

export const Home: React.FC = () => {
    return (
        <main>
            <Hero />
            <Details />
        </main>
    );
};
