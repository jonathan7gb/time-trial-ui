import { Crown } from "lucide-react"
import PositionFastest from "./positionFastest"
import type { PodioGlobal } from "../types/paineis"

type Props = {
  podio: PodioGlobal[]
}

function Ranking10Fast({ podio }: Props) {

  const top10Fast = [...podio]
    .sort((a, b) => a.melhorTempoMs - b.melhorTempoMs)
    .slice(0, 10)

  return (
    <div className="w-full">
      <div className="border border-primary/75 rounded-lg p-8">

        <h2 className="text-xl font-mono font-semibold text-primary italic flex flex-row gap-4">
          Top 10 Fastest Cars <Crown color="#D4AF37" />
        </h2>

        <ul className="flex flex-col gap-4 mt-4">

          {top10Fast.map((item, idx) => (
            <PositionFastest
              key={item.carroId}
              position={idx + 1}
              data={item}
            />
          ))}

        </ul>

      </div>
    </div>
  )
}

export default Ranking10Fast