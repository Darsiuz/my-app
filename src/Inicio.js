import React, { Component } from 'react';
import Navegador from './componentes/Navegador';
import App from './App';
import './Inicio.css';

class Inicio extends Component {
    
    render() { 
        return ( 
            <div className="App">
                <Navegador />
                <div className="container">
                    <App />

                </div>
            
            </div>
         );
    }
}
 
export default Inicio;