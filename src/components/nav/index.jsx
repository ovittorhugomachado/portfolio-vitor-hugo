import { Container, List, Item } from "./style";
import { HiOutlineHome } from "react-icons/hi2";
import { GoPerson } from "react-icons/go";
import { IoDocumentOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";

const Nav = ({ deviceType, menuOpen }) => {

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
                    <Item key={index}>
                        <a href="#" aria-label={item.text}> 
                            {(deviceType === 'mobile' || !menuOpen) && (
                                <item.icon className="icon" />
                            )}
                            {(deviceType === 'mobile' || menuOpen) && (
                                menuOpen ? <h5>{item.text}</h5> : <p>{item.text}</p>
                            )}
                        </a>
                    </Item>
                ))}
            </List>
        </Container>
    )
}

export { Nav }