import { SunMoon } from "lucide-react"
import useTheme from "../hooks/ToggleTheme";

function ThemeButton(){
    const { toggleTheme } = useTheme()

    return (
        <button onClick={toggleTheme} className="transition-all duration-500 hover:scale-110 cursor-pointer">
            <SunMoon color="red" strokeWidth="1" size={32}/>
        </button>
    )

}

export default ThemeButton;