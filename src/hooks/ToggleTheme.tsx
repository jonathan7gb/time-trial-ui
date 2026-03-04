import { useState, useEffect } from "react";

type Theme = "light" | "dark";

function useTheme(){
    const [theme, setTheme] = useState<Theme>(() => {
        const saved = localStorage.getItem("theme") as Theme | null;
        return saved ?? 'light';
    })

    useEffect(() => {
        const root = document.documentElement;

        theme === "dark" ? root.classList.add("dark") : root.classList.remove("dark")

        localStorage.setItem("theme", theme)
    }, [theme])

    const toggleTheme = () => {
        setTheme(prev => (prev === "dark" ? "light" : "dark"))
    }

    return { theme, toggleTheme }
}

export default useTheme;