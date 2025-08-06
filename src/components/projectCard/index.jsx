import {
    Container,
    Image,
    ContainerInfo,
    Technologie,
    ContainerTechnologies,
    ContainerLinks,
    Link
} from "./style"
import { FaGithub } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";

const ProjectCard = ({ image, title, text, technologies, linkCode, linkCode2, linkPage }) => {

    return (
        <Container>
            <Image src={image} alt={title} />
            <ContainerInfo>
                <h2>{title}</h2>
                <p>{text}</p>
                <ContainerTechnologies>
                    {technologies.map((technologie, index) => (
                        <Technologie href="#" key={index} className="technologie">{technologie}</Technologie>
                    ))} {/* falta colocar o link */}
                </ContainerTechnologies>
                <ContainerLinks>
                    <Link href={linkCode} target="_blank"><FaGithub className="link" />Código</Link>
                    {linkCode2 && (
                        <Link href={linkCode2} target="_blank"><FaGithub className="link" />Código back-end</Link>
                    )}
                    <Link href={linkPage} target="_blank"><TfiWorld className="link" />Página</Link>
                </ContainerLinks>
            </ContainerInfo>
        </Container>
    )
}

export { ProjectCard }