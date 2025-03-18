import { ProfilePicture } from "../profilePicture"

const Home = () => {
    return (
            <main className="home">
                <div>
                    <h1>VITOR HUGO</h1>
                    <h3>DEV</h3>
                    <h2>FrontEnd</h2>
                    <p className="large">HTML | CSS | JavaScript | ReactJS</p>
                </div>
                <ProfilePicture />
            </main>
    )
}

export { Home }