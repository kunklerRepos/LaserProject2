import React, { useState } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './styles/NavMenu.component.css';


function NavMenu()
{
    const [toggleNavBar, setToggleNavBar] = useState(true);

    const toggle = () =>
    {
        setToggleNavBar(!toggleNavBar);
    }


    return (
        <header>
            <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3 circle" container light>
                <NavbarBrand tag={Link} to="/">Laser Pricing Project</NavbarBrand>
                <NavbarToggler onClick={toggle} className="mr-2" />
                <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!toggleNavBar} navbar>
                    <ul className="navbar-nav flex-grow">
                        <NavItem>
                            <NavLink tag={Link}  to="/LaserProject2">Home</NavLink>
                        </NavItem>
                        
                        <NavItem>
                            <NavLink tag={Link} to="/MachineCosts">Machine Costs</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/Materials">Materials</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/LaborCost">Labor Costs</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/Shipping">Shipping</NavLink>
                        </NavItem>
                    </ul>
                </Collapse>
            </Navbar>
        </header>
    );
}

export default NavMenu;