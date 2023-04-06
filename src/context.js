import React, { createContext, useState } from "react"


export const ThemeContect = createContext()

const Mode = ({ children }) => {
    const [theme, setTheme] = useState({
        icon: "black", title: 'black', background: "white"
    })

    return (
        <ThemeContect.Provider value={[theme, setTheme]}>
            {children}
        </ThemeContect.Provider>
    )
}
export default Mode;