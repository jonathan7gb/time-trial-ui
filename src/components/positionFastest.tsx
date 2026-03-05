import type { PodioGlobal } from "../types/paineis"

type Props = {
  position: number
  data: PodioGlobal
}

function PositionFastest({ position, data }: Props) {

  const seconds = (data.melhorTempoMs / 1000).toFixed(2)

  return (
    <li className="border-b border-primary/50 flex flex-row justify-between">

      <p className="font-mono text-primary font-semibold">
        {position}º
        <span className="text-[var(--color-text)] font-normal">
          {" "}Car ID: {data.carroId}
        </span>
      </p>

      <p className="text-xl font-mono font-medium text-[var(--color-text)]">
        {seconds}s
      </p>

    </li>
  )
}

export default PositionFastest