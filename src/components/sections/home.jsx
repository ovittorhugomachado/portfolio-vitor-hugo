import { ProfilePicture } from "../profilePicture"
import curriculo from "../../../pdf/curriculo-vitor-hugo.pdf"
import { MdFileDownload } from "react-icons/md";

const Home = () => {
    return (
        <main className="home">
                <ProfilePicture />
                <div>
                    <h1>VITOR HUGO</h1>
                    <h3>DEV</h3>
                    <h2 className="home">FrontEnd</h2>
                    <p className="large">HTML | CSS | JavaScript | React</p>
                    <div className="cv-button">
                        <a className="cv" href={curriculo} target="_blank">Visualizar currículo</a>
                        <a className="download-cv" href={curriculo} download><MdFileDownload className="download" /></a>
                    </div>
                </div>
        </main>
    )
}

export { Home }