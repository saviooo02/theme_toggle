import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

function Header() {
    const { theme, handleThemeChange } = useContext(ThemeContext);

    return (
        <>  
            <h2>Header Component</h2> {/* Add this line to check if the Header component renders */}
            <p>Current theme is: {theme}</p>
            <button onClick={handleThemeChange}>Toggle Theme</button>
        </>
    );
}

export default Header;
