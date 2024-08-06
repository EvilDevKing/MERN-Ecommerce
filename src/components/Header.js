import { useEffect, useState } from "react"
import Logo from "../assets/logo.png"

export const Header = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "medium")

    useEffect(() => {
        localStorage.setItem("theme", theme)
        document.documentElement.removeAttribute("class")
        document.documentElement.classList.add(theme)
    }, [theme])

    return (
        <header>
            <div className="logo">
                <img src={Logo} alt="Taskmate Logo" />
                <span>Taskmate</span>
            </div>
            <div className="themeSelector">
                <span onClick={() => setTheme("light")} className={`light ${ theme === "light" && "activeTheme" }`}></span>
                <span onClick={() => setTheme("medium")} className={`medium ${ theme === "medium" && "activeTheme" }`}></span>
                <span onClick={() => setTheme("dark")} className={`dark ${ theme === "dark" && "activeTheme" }`}></span>
                <span onClick={() => setTheme("gOne")} className={`gOne ${ theme === "gOne" && "activeTheme" }`}></span>
                <span onClick={() => setTheme("gTwo")} className={`gTwo ${ theme === "gTwo" && "activeTheme" }`}></span>
                <span onClick={() => setTheme("gThree")} className={`gThree ${ theme === "gThree" && "activeTheme" }`}></span>
            </div>
        </header>
    )
}
