import Ranking10Fast from "./Ranking10Fast"
import Ranking10Recently from "./Ranking10Recently"
import { usePainelWebSocket } from "../hooks/usePainelWebSocket"

function Hero() {

  const dados = usePainelWebSocket()

  if (!dados) return <p className="text-white text-center font-mono text-2xl mt-4">Conectando ao circuito...</p>

  return (
    <div className="p-8 lg:px-40 lg:py-8 flex flex-col lg:flex-row justify-between w-full gap-8">

      <Ranking10Fast podio={dados.podio} />

      <Ranking10Recently recentes={dados.recentes} />

    </div>
  )
}

export default Hero