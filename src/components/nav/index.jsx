import { Container, List, Item } from "./style";
import { HiOutlineHome } from "react-icons/hi2";
import { GoPerson } from "react-icons/go";
import { IoDocumentOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";

const Nav = ({ deviceType, menuOpen }) => {

    const menuItems = [
        { icon: HiOutlineHome, text: "HOME", page: "/" },
        { icon: GoPerson, text: "SKILLS", page: "/skills" },
        { icon: IoDocumentOutline, text: "PROJETOS", page: "/projects" },
        { icon: BsTelephone, text: "CONTATO", page: "/contact" },
    ];

    return (
        <Container className={deviceType}>
            <List className={deviceType}>
                {menuItems.map((item, index) => (
                    <Item
                        key={index}
                        onClick={() => handleItemClick(index)}
                    >
                        <a href={item.page} aria-label={item.text}>
                            {(deviceType === 'mobile' || !menuOpen) && (
                                <item.icon className='nav-icon'/>
                            )}
                            {(deviceType === 'mobile' || menuOpen) && (
                                menuOpen ? <h5 className='nav'>{item.text}</h5> : <p className='nav'>{item.text}</p>
                            )}
                        </a>
                    </Item>
                ))}
            </List>
        </Container>
    )
}

export { Nav }