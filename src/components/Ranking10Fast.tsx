import { Crown } from "lucide-react";
import PositionFastest from "./positionFastest";

function Ranking10Fast(){
    return (
        
        <div className="w-full">
            <div className="border border-primary/75 rounded-lg p-8">
            <h2 className="text-xl font-mono font-semibold text-primary italic flex flex-row gap-4">Top 10 Fastest Cars <Crown color="#D4AF37"/> </h2>
            <ul className="flex flex-col gap-4 mt-4">
                <li className="border-b border-primary/50 flex flex-row justify-between">
                    <p className="font-mono text-amber-400 font-semibold">1º <span className="text-[var(--color-text)] font-normal">Car ID: 41521521</span></p>
                    <p className="text-xl font-mono font-medium text-[var(--color-text)]">1.12s</p>
                </li>
                <li className="border-b border-primary/50 flex flex-row justify-between">
                    <p className="font-mono text-gray-400 font-semibold">2º <span className="text-[var(--color-text)] font-normal">Car ID: 41521521</span></p>
                    <p className="text-xl font-mono font-medium text-[var(--color-text)]">1.24s</p>
                </li>
                <li className="border-b border-primary/50 flex flex-row justify-between">
                    <p className="font-mono text-amber-700 font-semibold">3º <span className="text-[var(--color-text)] font-normal">Car ID: 41521521</span></p>
                    <p className="text-xl font-mono font-medium text-[var(--color-text)]">1.45s</p>
                </li>
                <PositionFastest position="4" car_id="123" seconds="1.47"/>
                <PositionFastest position="5" car_id="456" seconds="1.57"/>
                <PositionFastest position="6" car_id="789" seconds="1.62"/>
                <PositionFastest position="7" car_id="101" seconds="1.78"/>
                <PositionFastest position="8" car_id="112" seconds="1.92"/>
                <PositionFastest position="9" car_id="121" seconds="2.01"/>
                <PositionFastest position="10" car_id="415" seconds="2.06"/>
            </ul>
            </div>
        </div>

    )
}

export default Ranking10Fast;