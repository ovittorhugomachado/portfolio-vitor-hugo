import { Container, ContainerLogo, HamburgerContainer, HamburgerLine, Logo } from "./style";
import { SocialMedia } from "../social-media";
import { useState } from "react";
import { Nav } from "../nav";

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }
    return (
        <Container className={menuOpen ? 'menu-active' : ''}>
            <ContainerLogo>
                <Logo src="/logo.png" alt="logo" />
                <h4 className={`name ${menuOpen ? "menu-open" : ""}`}>VITOR HUGO</h4>
            </ContainerLogo>
            <HamburgerContainer onClick={toggleMenu}>
                <HamburgerLine className={menuOpen ? 'active' : ''} />
            </HamburgerContainer>
            <Nav className={menuOpen ? 'menu-active' : ''} deviceType={'desktop'} menuOpen={menuOpen} />
            <SocialMedia menuOpen={menuOpen} />
        </Container>
    )
}

export { Header }