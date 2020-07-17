import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import {
    Navbar, NavbarBrand, ButtonGroup, Button
} from 'reactstrap'

const NavbarE = () => {
    return (
        <Navbar style={{ backgroundColor: "#5385AF" }}>
            <NavbarBrand>
                <img src="../Equ.png"></img>
            </NavbarBrand>
            <NavbarBrand>
                <h1>EQUILIBRIUM</h1>
            </NavbarBrand>
            <NavbarBrand>
                <ButtonGroup>
                    <Link to="/login">
                        <Button style={{ backgroundColor: "#51C8CF", borderColor: "#51C8CF" }}>Login</Button>
                    </Link>
                    <Link to="/">
                        <Button style={{ backgroundColor: "#51C8CF", borderColor: "#51C8CF" }}>Home</Button>
                    </Link>
                    <Link to="/history">
                        <Button style={{ backgroundColor: "#51C8CF", borderColor: "#51C8CF" }}>Historial</Button>
                    </Link>
                    <Link to="/newopp">
                        <Button style={{ backgroundColor: "#51C8CF", borderColor: "#51C8CF" }}>Agregar</Button>
                    </Link>

                </ButtonGroup>
            </NavbarBrand>
        </Navbar>
    )
}

export default NavbarE;