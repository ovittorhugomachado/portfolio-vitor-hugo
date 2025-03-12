import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./home";
import { Skills } from "./skills";
import { Contact } from "./contact";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/skills" element={ <Skills /> } />
                <Route path="/contact" element={ <Contact /> } />
            </Routes>
        </BrowserRouter>
    )
}

export { AppRoutes }