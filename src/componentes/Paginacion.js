import React from 'react';
// import App from '../App';

const Paginacion = props => {
    return (
        // <div className="py-3">
        //     <button onClick={props.paginaAnterior} type="button" className="btn btn-info mr-1">Anterior &larr;</button>
        //     <button onClick={props.paginaSiguiente} type="button" className="btn btn-info mr-1">Siguiente &rarr;</button>
        // </div>

        <ul className="pagination">
            <li className="page-item">
            <button onClick={props.paginaAnterior} className="page-link">&laquo;</button>
            </li>
            <li className="page-item active">
            <button className="page-link">1</button>
            </li>
            <li className="page-item disabled">
            <button className="page-link">2</button>
            </li>
            <li className="page-item">
            <button className="page-link">3</button>
            </li>
            <li className="page-item">
            <button className="page-link">4</button>
            
            </li>
            <li className="page-item">
            <button onClick={props.paginaSiguiente} className="page-link">&raquo;</button>
            </li>
        </ul>

    )
}

export default Paginacion;