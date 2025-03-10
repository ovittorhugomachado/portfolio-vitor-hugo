import { Container, Item } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FaLinkedin, FaGithub  } from "react-icons/fa";

function SocialMedia({menuOpen}) {
    return (
        <Container className={menuOpen ? 'menu-open' : ''}>
            <Item
                className='icon-social-media'
                href="https://github.com/vitor-hugo-machado"
                target='_blank'
            >
                <FaGithub />
            </Item>
            <Item
                className='icon-social-media'
                href="https://www.linkedin.com/in/vitor-hugo-alves-machado-82b73a320/"
                target='_blank'
            >
                <FaLinkedin />
            </Item>
        </Container>
    )
}

export { SocialMedia } 