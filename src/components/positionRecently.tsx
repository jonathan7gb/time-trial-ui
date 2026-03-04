type Props = {
  position: string
  car_id: string
  datetime: string
}

function PositionRecently({position, car_id, datetime}: Props) {

    return (
        <li className="border-b border-primary/50 flex flex-row justify-between">
            <p className="font-mono text-primary font-semibold">{position}º <span className="text-[var(--color-text)] font-normal">Car ID: {car_id}</span></p>
            <p className="text-lg font-mono font-medium text-[var(--color-text)]">{datetime}</p>
        </li>
    )

}

export default PositionRecently;