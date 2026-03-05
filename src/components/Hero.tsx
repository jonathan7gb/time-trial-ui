import Ranking10Fast from "./Ranking10Fast"
import Ranking10Recently from "./Ranking10Recently"
import { usePainelWebSocket } from "../hooks/usePainelWebSocket"


function Hero() {

    const dados = usePainelWebSocket()

    if (!dados) return (
        <div className="text-center mt-[4rem]">
            <svg className="mx-auto size-8 animate-spin text-primary dark:text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>

                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
        </div>
    )

    return (
        <div className="p-8 lg:px-40 lg:py-8 flex flex-col lg:flex-row justify-between w-full gap-8">

            <Ranking10Fast podio={dados.podio} />

            <Ranking10Recently recentes={dados.recentes} />


        </div>
    )
}

export default Hero