import React, { useState } from 'react';
import logo from '../logo.svg';
import { NavbarBrand, Container, Collapse } from 'react-bootstrap';


const Navegador = (props) => {
    const [open, setOpen] = useState(false);
    
       
    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
            <Container className="">
                <NavbarBrand>
                    <img src={logo} className="App-logo" alt="logo" />
                    <p className="App-logo-txt">Darsiuz.jeje</p>
                </NavbarBrand>
                <button onClick={() => setOpen(!open)} className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded={open} aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Collapse in={open}>
                    <div className="navbar-collapse" id="navbarColor02">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#0">Inicio <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#1">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#2">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#3">Buscador Img</a>
                        </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Buscar"/>
                            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Buscar</button>
                        </form>
                    </div>
                </Collapse>
            </Container>
        </nav>
   )
}

export default Navegador;


