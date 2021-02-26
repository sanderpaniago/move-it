import { createContext, ReactNode, useState } from "react";


interface ThemeContextData {
    theme: string;
    switchActive: boolean;
    handleThema: ()=> void;
}

interface ThemeProviderProps {
    children: ReactNode;
}


export const ThemeContext = createContext({} as ThemeContextData)

export function ThemeProvaider({children}: ThemeProviderProps) {

    const [theme, setTheme] = useState('dark')
    const [switchActive, setSwitchActive] = useState(false)

    function handleThema() {
        setSwitchActive(!switchActive)
        if (switchActive) {
            return setTheme('dark')
        }
        setTheme('light')
    }

    return(
        <ThemeContext.Provider value={{theme, switchActive, handleThema}}>
            {children}
        </ThemeContext.Provider>
    )
}