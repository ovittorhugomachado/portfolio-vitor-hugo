import {
    Container,
    Menu,
    ContainerLogo,
    Logo
} from "./style";
import { useState, useContext } from "react";
import { SectionContext } from "../../context/sectionContext.jsx";
import { IoIosArrowForward } from "react-icons/io";
import { Nav } from "../nav";
import { SocialMedia } from "../socialMedia";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(true);

    const { setCurrentSection } = useContext(SectionContext)

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev)
    }

    const menuClass = menuOpen ? 'menu-open' : '';

    return (
        <Container className={menuOpen ? 'menu-active' : ''}>
            <Menu className={menuOpen ? 'menu-active' : ''}>
                <ContainerLogo onClick={() => setCurrentSection(0)}>
                    <Logo src="/logo.png" alt="logo" />
                    <h4 className={`name ${menuClass}`}>VITOR HUGO</h4>
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