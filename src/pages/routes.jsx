import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./home";
import { Skills } from "./skills";
import { Contact } from "./contact";
import { Projects } from "./projects";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/skills" element={ <Skills /> } />
                <Route path="/projects" element={ <Projects /> } />
                <Route path="/contact" element={ <Contact /> } />
            </Routes>
        </BrowserRouter>
    )
}

export { AppRoutes }