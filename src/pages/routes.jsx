import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./home";
import { Skills } from "./skills";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/skills" element={ <Skills /> } />
            </Routes>
        </BrowserRouter>
    )
}

export { AppRoutes }