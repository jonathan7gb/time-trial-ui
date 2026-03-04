import { CalendarDays } from "lucide-react";
import PositionRecently from "./positionRecently";

function Ranking10Recently(){
    return (

        <div className="w-full">
            <div className="border border-primary/75 rounded-lg p-8">
            <h2 className="text-lg font-mono font-semibold text-primary italic flex flex-row gap-4">Top 10 Recently Cars <CalendarDays color="#D4AF37"/> </h2>
            <ul className="flex flex-col gap-4 mt-4">
                <li className="border-b border-primary/50 flex flex-row justify-between">
                    <p className="font-mono text-amber-400 font-semibold">1º <span className="text-[var(--color-text)] font-normal">Car ID: 41521521</span></p>
                    <p className="text-lg font-mono font-medium text-[var(--color-text)]">03/03/2026 - 16:45</p>
                </li>
                <li className="border-b border-primary/50 flex flex-row justify-between">
                    <p className="font-mono text-gray-400 font-semibold">2º <span className="text-[var(--color-text)] font-normal">Car ID: 41521521</span></p>
                    <p className="text-lg font-mono font-medium text-[var(--color-text)]">03/03/2026 - 16:42</p>
                </li>
                <li className="border-b border-primary/50 flex flex-row justify-between">
                    <p className="font-mono text-amber-700 font-semibold">3º <span className="text-[var(--color-text)] font-normal">Car ID: 41521521</span></p>
                    <p className="text-lg font-mono font-medium text-[var(--color-text)]">03/03/2026 - 16:40</p>
                </li>
                <PositionRecently position="4" car_id="123" datetime="03/03/2026 - 16:38"/>
                <PositionRecently position="5" car_id="456" datetime="03/03/2026 - 16:34"/>
                <PositionRecently position="6" car_id="789" datetime="03/03/2026 - 16:32"/>
                <PositionRecently position="7" car_id="101" datetime="03/03/2026 - 16:29"/>
                <PositionRecently position="8" car_id="112" datetime="03/03/2026 - 16:25"/>
                <PositionRecently position="9" car_id="121" datetime="03/03/2026 - 16:22"/>
                <PositionRecently position="10" car_id="415" datetime="03/03/2026 - 16:19"/>
            </ul>
            </div>
        </div>

    )
}

export default Ranking10Recently;