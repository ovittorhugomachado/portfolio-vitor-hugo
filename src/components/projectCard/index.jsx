import { Container } from "./style"

const ProjectCard = ({image, title, text, technologies}) => {

    return (
        <Container>
            <img width={200} src={image} alt={title} />
            <h6>{title}</h6>
            <p>{text}</p>
            <h6>{technologies}</h6>
        </Container>
    )
}

export { ProjectCard }