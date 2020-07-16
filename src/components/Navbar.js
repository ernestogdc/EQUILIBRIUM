import React from 'react';
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
                    <Button style={{ backgroundColor: "#51C8CF", borderColor: "#51C8CF" }}>Home</Button>
                    <Button style={{ backgroundColor: "#51C8CF", borderColor: "#51C8CF" }}>Historial</Button>
                    <Button style={{ backgroundColor: "#51C8CF", borderColor: "#51C8CF" }}>Agregar</Button>
                </ButtonGroup>
            </NavbarBrand>
        </Navbar>
    )
}

export default NavbarE;