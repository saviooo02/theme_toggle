import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

function Header() {
    const { theme, handleThemeChange } = useContext(ThemeContext);

    return (
        <>  
            <p>Current theme is: {theme}</p>
            <button onClick={handleThemeChange}>Toggle Theme</button>
        </>
    );
}

export default Header;
