import React, { Component } from 'react';
import Buscador from './componentes/Buscador';
import Resultado from './componentes/Resultado';

class App extends Component {

  state = {
    termino: '',
    imagenes: [],
    pagina: '1'
  }

  scroll = () => {
    const elemento = document.querySelector('.jumbotron');
    elemento.scrollIntoView('smooth','start');
  }

  paginaAnterior = () => {
    //leer el state de la pagina actual
    let pagina = this.state.pagina;
    //Leer si la pagina es 1, ya no ir hacia atras
    if(pagina === 1) return null;
    //Restar uno a la pagina actual
    pagina -= 1;
    //agregar el cambio al state
    this.setState({
      pagina
    }, () => {
      this.consultarApi();
      this.scroll();
    });
    //console.log(pagina);
  }
  paginaSiguiente = () => {
    //leer el state de la pagina actual
    let pagina = this.state.pagina;
    //Sumar uno a la pagina actual
    pagina += 1;
    //agregar el cambio al state
    this.setState({
      pagina
    }, () => {
      this.consultarApi();
      this.scroll();
    });
    //console.log(pagina);
  }

  consultarApi = () => {
    const terminos = this.state.termino;
    const pagina = this.state.pagina;
    const url = `https://pixabay.com/api/?key=14801246-6b330c60536908bc34adfc0ba&q=${terminos}&per_page=30&page=${pagina}`;
    //console.log(url);
    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => this.setState({ imagenes : resultado.hits }) )
  }

  datosBusqueda = (termino) => {
    this.setState({
      termino : termino,
      pagina : 1
    }, () => {
      this.consultarApi();
    });
  }

     
  render() {
    return (
      <React.Fragment>
        <div className="jumbotron">
          <p className="lead text-center">Buscador de Imagenes</p>
          <Buscador 
            datosBusqueda={this.datosBusqueda}
          />
        </div>
        <div className="row justify-content-center">
          <Resultado
            imagenes={this.state.imagenes}
            paginaAnterior={this.paginaAnterior}
            paginaSiguiente={this.paginaSiguiente}
          />
        </div>
      </React.Fragment>
    );
  }
}
export default App;
