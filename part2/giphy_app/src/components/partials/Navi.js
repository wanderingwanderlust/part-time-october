import { Navbar, NavbarBrand, Collapse, NavLink, NavItem, Nav } from "reactstrap";
import { Link } from 'react-router-dom'

function Navi() {
    return(
        <Navbar color="light" light expand='md'>
            <NavbarBrand tag={Link} to='/'>Giphy App</NavbarBrand>
            <Collapse navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink tag={Link} to='/about'>About</NavLink>
                    </NavItem>
                    {/* ToDo Add Login, Register, Search, Saved */}
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Navi;