import { useContext } from "react";
import { SectionContext } from "../../context/sectionContext";
import { Home } from "../sections/home";
import { Skills } from "../sections/skills";
import { Projects } from "../sections/projects";
import { Contact } from "../sections/contact";



const Main = () => {

    const {currentSection, setCurrentSection} = useContext(SectionContext)

    const sections = [
        <Home />,
        <Skills />,
        <Projects />,
        <Contact />
    ];

    return (
        <>
            {sections[currentSection]}
        </>
    )
}

export { Main }