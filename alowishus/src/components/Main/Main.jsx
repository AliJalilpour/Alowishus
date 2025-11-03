import BestSelling from "./BestSelling";
import Explore from "./Explore";
import InstantCoffee from "./InstantCoffee";
import Introduction from "./Introduction";
import Order from "./Order";
import Testimonials from "./Testimonials";

const Main = () => {
    return (
        <main className="max-md:mt-5 md:mt-10 xl:mt-30.75">
            <Introduction />
            <section className="bg-linear-to-b from-white via-[#F3F4F5]/50 to-white">
                <Explore />
                <Order />
                <BestSelling />
                <InstantCoffee />
                <Testimonials />
            </section>
        </main>
    )
}
export default Main;