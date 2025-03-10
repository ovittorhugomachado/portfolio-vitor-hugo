import { Style } from "./style";
import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";

export const GlobalStyle = () => {
    const { themes } = useContext(ThemeContext);

    return <Style theme={themes} />
}