import { Header } from "../components/header"
import { Nav } from "../components/nav"
import { ProfilePicture } from "../components/profilePicture"

const Home = () => {
    return (
        <>
            <Header />

            <main className="home">
                <div>
                    <h1>VITOR HUGO</h1>
                    <h3>DEV</h3>
                    <h2>FrontEnd</h2>
                    <p className="large">HTML | CSS | JavaScript | ReactJS</p>
                </div>
                <ProfilePicture />
            </main>
            <Nav deviceType={'mobile'} /> {/*SÓ RENDERIZA EM NO MÁXIMO 1020px */}

        </>
    )
}

export { Home }