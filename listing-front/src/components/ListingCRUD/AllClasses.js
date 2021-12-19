import React from 'react'
import image from '../../image.jpg'
import { Link } from 'react-router-dom';

export const AllClasses = ({data}) => {

    const divStyleCard = {
        width: '18rem',
        display: 'inline-block',
        margin: '6px',
    }

    return (
        <div className="col">
            <div className="card" style={ divStyleCard }>
            <img src={image} className="card-img-top" alt="imagen del componente"></img>
            <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link className="btn btn-primary" to={`/seeclass/${data.slug}`}>Read More</Link>
            </div>
            </div>
        </div>
    )
}
