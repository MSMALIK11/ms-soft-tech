import { IoSunnyOutline } from "react-icons/io5";
import { IoIosMoon } from "react-icons/io";
import { useEffect, useState } from "react";

const DarkMode = () => {

    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')
    const element = document.documentElement
    useEffect(() => {
        if (theme === "dark") {
            element.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            element.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }

    }, [theme])
    return (
        <div className="duration-300">
            {
                theme == 'light' ? <IoIosMoon onClick={() => setTheme('dark')} className="dark:text-white text-dark" /> : <IoSunnyOutline className="dark:text-white text-dark" onClick={() => setTheme('light')} />
            }
        </div>
    )
}

export default DarkMode