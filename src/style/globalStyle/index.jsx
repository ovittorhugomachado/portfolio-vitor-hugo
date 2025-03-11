import { Style } from "./style";
import { ThemeContext } from "../../context/themeContext";
import { useContext } from "react";


export const GlobalStyle = () => {
    const { theme } = useContext(ThemeContext);

    return <Style theme={theme} />
}