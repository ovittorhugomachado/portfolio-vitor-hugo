import { Container, Logo } from "./style";
import { SocialMedia } from "../social-media";

const Header = () => {
    return (
        <Container>
            <Logo src="/logo.png" alt="logo" />
            <h4 className="name">VITOR HUGO</h4>
            <SocialMedia />
        </Container>
    )
}

export { Header }