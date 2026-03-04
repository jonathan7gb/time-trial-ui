import Ranking10Fast from "./Ranking10Fast";
import Ranking10Recently from "./Ranking10Recently";

function Hero(){

    return (
        <div className="p-8 lg:px-40 lg:py-8 flex flex-col lg:flex-row justify-between w-full gap-8" id="hero">
            <Ranking10Fast />
            <Ranking10Recently />
        </div>
    )

}

export default Hero;