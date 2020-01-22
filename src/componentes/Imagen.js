import React from 'react';

const Imagen = (props) => {

    const {largeImageURL, likes, previewURL, tags, views} = props.imagen;

    return (
        <div className="col-12 col-sm-6 col-md-4 mb-3">
            <div className="card mb-12">
                <a href={largeImageURL} data-lightbox="mygallery" data-alt={tags}>    
                    <img src={previewURL} alt={tags} className="card-img-top" />
                </a>
            
                <div className="list-group list-group-flush">
                    <ul className="list-group list-group-flush">
                        <a href={largeImageURL} target="_black" className="list-group-item list-group-item-action">Ver Imagen</a>
                        <li className="list-group-item">A {likes} les gusta</li>
                        <li className="list-group-item">A {views} lo vieron</li>            
                    </ul>
                </div>
            </div>
        </div>
//        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
//            <div className="card">
//                <a href={largeImageURL} data-lightbox="mygallery" data-alt={tags}>    
//                    <img src={previewURL} alt={tags} className="card-img-top" />
//                </a>
//                <div className="card-body">
//                    <p className="card-text">A {likes} les gusta</p>
//                    <p className="card-text">A {views} lo vieron</p>
//                    <a href={largeImageURL} target="_black" className="btn btn-primary btn-block">Ver Imagen</a>
//                </div>
//            </div>
//        </div>
    )

}

export default Imagen;