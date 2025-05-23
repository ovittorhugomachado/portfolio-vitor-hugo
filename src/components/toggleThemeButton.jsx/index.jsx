import { Button, Container } from "./style";
import { IoMoonOutline, IoSunnyOutline  } from "react-icons/io5";
import { ThemeContext } from "../../context/themeContext";
import { useContext } from "react";

const ToggleThemeButton = () => {
    const { theme, changeTheme } = useContext(ThemeContext);

    return (
        <Container onClick={changeTheme}>
            <IoSunnyOutline className='theme-icon sun' />
            <IoMoonOutline className='theme-icon moon'  />
            <Button className={`${theme.name === 'light'? 'light' : 'dark'}`} />
        </Container>
    )
}

export { ToggleThemeButton }