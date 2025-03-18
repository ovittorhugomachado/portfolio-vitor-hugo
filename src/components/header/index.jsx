import { Container, Menu, ContainerLogo, Logo } from "./style";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { ToggleThemeButton } from "../toggleThemeButton.jsx";
import { Nav } from "../nav";
import { SocialMedia } from "../socialMedia";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev)
    }

    const menuClass = menuOpen ? 'menu-open' : '';

    return (
        <Container className={menuOpen ? 'menu-active' : ''}>
            <Menu className={menuOpen ? 'menu-active' : ''}>
                <ContainerLogo>
                    <Logo src="/logo.png" alt="logo" />
                    <h4 className={`name ${menuClass}`}>VITOR HUGO</h4>
                    <ToggleThemeButton className='nav-icon' deviceType='desktop' />
                </ContainerLogo>
                <Nav
                    className={menuClass}
                    deviceType={'desktop'}
                    menuOpen={menuOpen}
                />
                <SocialMedia menuOpen={menuOpen} />
                <IoIosArrowForward
                    className={`menu-arrow ${menuClass}`}
                    onClick={toggleMenu}
                    aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
                    aria-expanded={menuOpen}
                />
            </Menu>
        </Container>

    )
}

export { Header }