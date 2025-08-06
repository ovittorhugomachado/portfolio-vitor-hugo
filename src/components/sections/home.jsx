import { ProfilePicture } from "../profilePicture"
import curriculo from "../../../pdf/curriculo-vitor-hugo.pdf"
import { MdFileDownload } from "react-icons/md";

const Home = () => {
    return (
        <main>
            <div className="home">
                <ProfilePicture />
                <div>
                    <h1>VITOR HUGO</h1>
                    <h3>DEV</h3>
                    <h2 className="home">Full Stack</h2>
                    <p className="large">TypeScript | React | Node.Js | PostgreSQL</p>
                    <div className="cv-button">
                        <a className="cv" href={curriculo} target="_blank">Visualizar currículo</a>
                        <a className="download-cv" href={curriculo} download><MdFileDownload className="download" /></a>
                    </div>
                </div>
            </div>
            <div className="home-text">
                <p>Bem vindo ao meu portfólio, eu sou o Vitor Hugo. Aqui você vai encontrar minhas habilidades e projetos pessoais, bem como minhas informações de contato.</p>
                <p>Estudo programação desde junho de 2024, quando comecei o curso Dev em Dobro, com ele aprendi a base de HTML, CSS e JavaScript, desenvolvi projetos pessoais principalmente com React e consumo de APIs. Com o tempo projetos que antes eram desafiadores foram ficando mais compreensíveis, fui descobrindo como resolver problemas e isso aumentou muito a fluidez do meu desenvolvimento, depois de me sentir confiante com os projetos front-end comecei a estudar o back-end,  desenvolvendo APIs com Node.js e bancos de dados relacionais como PostgreSQL. Desde então venho buscando minha primeira oportunidade de emprego, para potencializar meu aprendizado e contribuir com projetos relevantes.</p>
            </div>
        </main>
    )
}

export { Home }