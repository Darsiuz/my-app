import React from 'react';
import ReactDOM from 'react-dom';
import Navegador from './componentes/Navegador';
import Inicio from './Inicio';
import BusqImg from './BusqImg';

class App extends React.Component {
    
    state = {
        navegacion: ''
    }

    Navegacion = () => {
        var contenedor = document.getElementById('Contenedor');
        let navegacion = this.state.navegacion;
        switch (navegacion) {
            case 1:
                ReactDOM.render( <Inicio />, contenedor);
                break;
            case 2:
                ReactDOM.render( <Inicio />, contenedor); 
                break;
            case 3:
                ReactDOM.render( <Inicio />, contenedor); 
                break;
            case 4:
                ReactDOM.render( <BusqImg />, contenedor); 
                break;
            default:
                ReactDOM.render( <Inicio />, contenedor);
                break;
        }

    }

    Inicio = () => {
        let navegacion = this.state.navegacion;
        if(navegacion === 1) return null;
        //Sumar uno a la navegacion actual
        navegacion = 1;
        //agregar el cambio al state
        this.setState({
        navegacion
        }, () => {
            this.Navegacion();
        });
        //console.log(navegacion);
    }
    App2 = () => {
        let navegacion = this.state.navegacion;
        if(navegacion === 2) return null;
        //Sumar uno a la navegacion actual
        navegacion = 2;
        //agregar el cambio al state
        this.setState({
        navegacion
        }, () => {
            this.Navegacion();
        });
        //console.log(navegacion);
    }
    App3 = () => {
        let navegacion = this.state.navegacion;
        if(navegacion === 3) return null;
        //Sumar uno a la navegacion actual
        navegacion = 3;
        //agregar el cambio al state
        this.setState({
        navegacion
        }, () => {
            this.Navegacion();
        });
        //console.log(navegacion);
    }
    BusqImg = () => {
        //leer el state de la navegacion actual
        let navegacion = this.state.navegacion;

        if(navegacion === 4) return null;
        //Sumar uno a la navegacion actual
        navegacion = 4;
        //agregar el cambio al state
        this.setState({
        navegacion
        }, () => {
            this.Navegacion();
        });
        //console.log(navegacion);
    }
    
    render() { 
        return ( 
            <React.Fragment>
                <header onLoad={this.Navegacion}>
                    <Navegador 
                        Inicio={this.Inicio}
                        App2={this.App2}
                        App3={this.App3}
                        BusqImg={this.BusqImg}
                    />
                </header>
                <main role="main" id="Contenedor"></main>

            </React.Fragment>
           
         );
    }
}
 
export default App;