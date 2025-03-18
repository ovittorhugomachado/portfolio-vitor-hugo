import { createContext, useState, useEffect} from "react";

export const SectionContext = createContext()

export const SectionProvider = ({children}) => {
    
    const [currentSection, setCurrentSection] = useState(0)

    return (
        <SectionContext.Provider value={{ currentSection, setCurrentSection }}>
            {children}
        </SectionContext.Provider>
    )
}
