import { CalendarDays } from "lucide-react"
import PositionRecently from "./positionRecently"
import  type { FeedRecente } from "../types/paineis"

type Props = {
  recentes: FeedRecente[]
}

function Ranking10Recently({ recentes }: Props) {

  const top10Recentes = [...recentes]
    .sort((a, b) => b.timestampMs - a.timestampMs)
    .slice(0, 10)

  return (
    <div className="w-full">
      <div className="border border-primary/75 rounded-lg p-8">

        <h2 className="text-lg font-mono font-semibold text-primary italic flex flex-row gap-4">
          Top 10 Recently Cars <CalendarDays color="#D4AF37" />
        </h2>

        <ul className="flex flex-col gap-4 mt-4">

          {top10Recentes.map((item, idx) => (
            <PositionRecently
              key={item.timestampMs}
              position={idx + 1}
              data={item}
            />
          ))}

        </ul>

      </div>
    </div>
  )
}

export default Ranking10Recently