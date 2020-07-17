import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import {
    Navbar, NavbarBrand, ButtonGroup, Button
} from 'reactstrap'


const NavbarE = () => {
    //  const [remove,setRemove] = useState(false)
    
    //useEffect(()=> {
        //window.sessionStorage.removeItem('id')
      //  },[])
    return (
        <Navbar style={{ backgroundColor: "#5385AF" }}>
            <NavbarBrand>
            </NavbarBrand>
            <NavbarBrand>
                <h3 className="text-white">EQUILIBRIUM</h3>
            </NavbarBrand>
            <div className="navbar-brand">
                <ButtonGroup style={{backgroundColor: "#51C8CF",borderRadius: "5px"}}>
                    <Link to="/home">
                        <Button style={{ backgroundColor: "#51C8CF", borderColor: "#51C8CF" }}>Home</Button>
                    </Link>
                    <Link to="/history">
                        <Button style={{ backgroundColor: "#51C8CF", borderColor: "#51C8CF" }}>Historial</Button>
                    </Link>
                    <Link to="/newopp/a/i">
                        <Button style={{ backgroundColor: "#51C8CF", borderColor: "#51C8CF" }}>Agregar</Button>
                    </Link>
                </ButtonGroup>
                <Button  className="ml-3" style={{ backgroundColor: "#a55", borderColor: "#a55" }}>lugout</Button>
            </div>
        </Navbar>
    )
}

export default NavbarE;