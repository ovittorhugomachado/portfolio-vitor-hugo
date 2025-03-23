import { ProfilePicture } from "../profilePicture"

const Home = () => {
    return (
            <main className="home">
                <div>
                    <ProfilePicture />  
                    <h1>VITOR HUGO</h1>
                    <h3>DEV</h3>
                    <h2 className="home">FrontEnd</h2>
                    <p className="large">HTML | CSS | JavaScript | React</p>
                </div>
                <div>
                    <p className="home">Bem-vindo(a) ao meu portfólio! Aqui é o espaço onde apresento meus projetos, habilidades e contato profissional. 
                    Este portfólio foi desenvolvido para registrar meu aprendizado, destacar minha experiência como desenvolvedor e compartilhar os trabalhos que tenho orgulho de criar.</p>
                    <a className="curriculo" href="#" target="_blank">Baixar currículo em pdf</a>
                </div>
                
            </main>
    )
}

export { Home }