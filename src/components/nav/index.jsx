import { Container, List, Item } from "./style";
import { HiOutlineHome } from "react-icons/hi2";
import { GoPerson } from "react-icons/go";
import { IoDocumentOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { useState, useEffect } from "react";

const Nav = ({ deviceType, menuOpen }) => {

    const [activeItem, setActiveItem] = useState(() => {
        const savedActiveItem = localStorage.getItem('activeItem'); // Recupera o valor do localStorage
        return savedActiveItem !== null ? Number(savedActiveItem) : null; // Converte para número ou retorna null
    });

    // Atualiza o localStorage sempre que activeItem mudar
    useEffect(() => {
        if (activeItem !== null) {
            localStorage.setItem('activeItem', activeItem); // Salva o valor no localStorage
        }
    }, [activeItem]);

    console.log(activeItem)

    const menuItems = [
        { icon: HiOutlineHome, text: "HOME", page: "/" },
        { icon: GoPerson, text: "SKILLS", page: "/skills" },
        { icon: IoDocumentOutline, text: "PROJETOS", page: "/projects" },
        { icon: BsTelephone, text: "CONTATO", page: "/contact" },
    ];

    const handleItemClick = (index) => {
        setActiveItem(index);
    };

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
                                <item.icon className={`nav-icon ${activeItem === index ? 'active' : ''}`}/>
                            )}
                            {(deviceType === 'mobile' || menuOpen) && (
                                menuOpen ? <h5 className={`nav ${activeItem === index ? 'active' : ''}`}>{item.text}</h5> : <p className={`nav ${activeItem === index ? 'active' : ''}`}>{item.text}</p>
                            )}
                        </a>
                    </Item>
                ))}
            </List>
        </Container>
    )
}

export { Nav }