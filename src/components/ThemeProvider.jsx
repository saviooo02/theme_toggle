import { useState,createContext} from "react";
const ThemeContext = createContext();

function ThemeProvider({children}){

    const[theme,setTheme] = useState("light")

    const handleThemeChange=()=>{
        setTheme(theme==="light"?"dark":"light")
    }

    return(
        <>
            <ThemeContext.Provider value={{theme,handleThemeChange}}>
                   {children}
            </ThemeContext.Provider>
        </>
    )
}

export {ThemeContext,ThemeProvider};
