import { Container, ContainerLogo, Logo } from "./style";
import { SocialMedia } from "../socialMedia";
import { useState } from "react";
import { Nav } from "../nav";
import { IoIosArrowForward } from "react-icons/io";


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
            <Nav className={menuOpen ? 'menu-active' : ''} deviceType={'desktop'} menuOpen={menuOpen} />
            <SocialMedia menuOpen={menuOpen} />
            <IoIosArrowForward className={`menu-arrow ${menuOpen ? "menu-open" : ""}`} onClick={toggleMenu} />
            
        </Container>
    )
}

export { Header }