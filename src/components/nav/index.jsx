import { Container, List, Item } from "./style";
import { HiOutlineHome } from "react-icons/hi2";
import { GoPerson } from "react-icons/go";
import { IoDocumentOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";

const Nav = ({ deviceType, menuOpen }) => {

    return (
        <Container className={deviceType}>
            <List className={deviceType}>
                <Item>
                    <a href="">
                        {deviceType === 'mobile' && <HiOutlineHome className="nav-icon" />}
                        {deviceType === 'mobile' && <p>HOME</p>}
                        {menuOpen === false && <HiOutlineHome className="nav-icon" />}
                        {menuOpen === true && <h5>HOME</h5>}
                    </a>
                </Item>
                <Item>
                    <a href="">
                        {deviceType === 'mobile' && <GoPerson className="nav-icon" />}
                        {deviceType === 'mobile' && <p>SKILLS</p>}
                        {menuOpen === false && <GoPerson className="nav-icon" />}
                        {menuOpen === true && <h5>SKILLS</h5>}
                    </a>
                </Item>
                <Item>
                    <a href="">
                        {deviceType === 'mobile' && <IoDocumentOutline className="nav-icon" />}
                        {deviceType === 'mobile' && <p>PROJETOS</p>}
                        {menuOpen === false && <IoDocumentOutline className="nav-icon" />}
                        {menuOpen === true && <h5>PROJETOS</h5>}
                    </a>
                </Item>
                <Item>
                    <a href="">
                        {deviceType === 'mobile' && <FiPhone className="nav-icon" />}
                        {deviceType === 'mobile' && <p>CONTATO</p>}
                        {menuOpen === false && <FiPhone className="nav-icon" />}
                        {menuOpen === true && <h5>CONTATO</h5>}
                    </a>
                </Item>
            </List>
        </Container>

    )
}

export { Nav }