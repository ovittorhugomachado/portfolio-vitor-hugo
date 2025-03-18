import { ToggleThemeButton } from "../toggleThemeButton.jsx";
import { Container, Item } from "./style";
import { FaLinkedin, FaGithub  } from "react-icons/fa";

function SocialMedia({ menuOpen }) {
    return (
        <Container className={menuOpen ? 'menu-open' : ''}>
            <Item
                className='icon-social-media'
                href="https://github.com/ovittorhugomachado"
                target='_blank'
            >
                <FaGithub className="social-media" />
            </Item>
            <Item
                className='icon-social-media'
                href="https://www.linkedin.com/in/vitor-hugo-alves-machado-1621bb156/"
                target='_blank'
            >
                <FaLinkedin className="social-media" />
            </Item>
            <ToggleThemeButton />
        </Container>
    )
}

export { SocialMedia } 