import type { FeedRecente } from "../types/paineis"

type Props = {
  position: number
  data: FeedRecente
}

function PositionRecently({ position, data }: Props) {

  const date = new Date(data.timestampMs).toLocaleString()

  return (
    <li className="border-b border-primary/50 flex flex-row justify-between">

      <p className="font-mono text-primary font-semibold">
        {position}º
        <span className="text-[var(--color-text)] font-normal">
          {" "}Car ID: {data.carroId}
        </span>
      </p>

      <p className="text-lg font-mono font-medium text-[var(--color-text)]">
        {date}
      </p>

    </li>
  )
}

export default PositionRecently