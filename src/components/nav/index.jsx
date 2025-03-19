import {
    Container,
    List,
    Item
} from "./style";
import { HiOutlineHome } from "react-icons/hi2";
import { GoPerson } from "react-icons/go";
import { IoDocumentOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { useContext } from "react";
import { SectionContext } from "../../context/sectionContext";

const Nav = ({ deviceType, menuOpen }) => {

    const { currentSection, setCurrentSection } = useContext(SectionContext)

    const menuItems = [
        { icon: HiOutlineHome, text: "HOME" },
        { icon: GoPerson, text: "SKILLS" },
        { icon: IoDocumentOutline, text: "PROJETOS" },
        { icon: BsTelephone, text: "CONTATO" },
    ];

    return (
        <Container className={deviceType}>
            <List className={deviceType}>
                {menuItems.map((item, index) => (
                    <Item
                        key={index}
                        onClick={() => setCurrentSection(index)}
                    >
                        <a href={item.page} aria-label={item.text}>
                            {(deviceType === 'mobile' || !menuOpen) && (
                                <item.icon className={`nav-icon ${currentSection === index ? 'active' : ''}`} />
                            )}
                            {(deviceType === 'mobile' || menuOpen) && (
                                menuOpen ?
                                    <h5 className={`nav ${currentSection === index ? 'active' : ''}`}>{item.text}</h5>
                                    :
                                    <p className={`nav ${currentSection === index ? 'active' : ''}`}>{item.text}</p>
                            )}
                        </a>
                    </Item>
                ))}
            </List>
        </Container>
    )
}

export { Nav }