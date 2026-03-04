type Props = {
    position: string
    car_id: string
    seconds: string
}

function PositionFastest({ position, car_id, seconds }: Props) {

    return (
        <li className="border-b border-primary/50 flex flex-row justify-between">
            <p className="font-mono text-primary font-semibold">{position}º <span className="text-[var(--color-text)] font-normal">Car ID: {car_id}</span></p>
            <p className="text-xl font-mono font-medium text-[var(--color-text)]">{seconds}s</p>
        </li>
    )

}

export default PositionFastest;