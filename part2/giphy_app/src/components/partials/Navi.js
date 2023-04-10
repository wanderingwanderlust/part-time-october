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
                    <NavItem>
                        <NavLink tag={Link} to='/gifs/search'>Search Gifs</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to='/gifs/saved'>Saved Gifs</NavLink>
                    </NavItem>
                    {/* ToDo Add Login, Register*/}
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Navi;