import React from 'react';
import logo from '../logo.svg';

const Navegador = (props) => {
    //Variables que se deben especificar al llamar al .js
    const Inicio = props.Inicio;
    const App2 = props.App2;
    const App3 = props.App3;
    const BusqImg = props.BusqImg;
    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark">
            <div className="container">
                <span className="navbar-brand">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p className="App-logo-txt">Darsiuz.jeje</p>
                </span>
                <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor02">
                    <ul className="navbar-nav mr-auto ">
                        <li className="nav-item mg-esp">
                            <a className="colornav nav-link" href="# " onClick={Inicio}>Inicio<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item mg-esp">
                            <a className="colornav nav-link" href="# " onClick={App2}>App2</a>
                        </li>
                        <li className="nav-item mg-esp">
                            <a className="colornav nav-link" href="# " onClick={App3}>App3</a>
                        </li>
                        <li className="nav-item mg-esp">
                            <a className="colornav nav-link" href="# " onClick={BusqImg}>BusqImg</a>
                        </li>
                    </ul>
                    <form className="BusquedaNav form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Buscar"/>
                        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Buscar</button>
                    </form>
                </div>
            </div>
        </nav>
   )
}

export default Navegador;


