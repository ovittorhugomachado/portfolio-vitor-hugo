import { Container } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function SocialMedia() {
    return (
        <Container>
            <a
                className='icon-social-media'
                href="https://github.com/vitor-hugo-machado"
                target='_blank'
            >
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
                className='icon-social-media'
                href="https://www.linkedin.com/in/vitor-hugo-alves-machado-82b73a320/"
                target='_blank'
            >
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
        </Container>
    )
}

export { SocialMedia } 