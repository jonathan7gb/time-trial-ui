import ThemeButton from "./ToggleThemeButton";

function Header(){

    return (
        <header className="p-8 lg:px-40 lg:py-8 flex flex-row justify-between items-center">
            <div className="">
                <h1 className="font-sans text-3xl lg:text-5xl text-primary tracking-wide italic">Time Trial UI</h1>
            </div>

        <div className="flex flex-row gap-8 lg:gap-16 items-center">
            <nav className="flex flex-row gap-8 items-center font-mono">
                <a href="#hero" className="text-[var(--color-text)] transition-all duration-600 hover:scale-110">Ranking</a>
                <a href="#team" className="text-[var(--color-text)] transition-all duration-600 hover:scale-110">Team</a>
            </nav>
            <ThemeButton />
        </div>
        </header>
    )

}

export default Header;