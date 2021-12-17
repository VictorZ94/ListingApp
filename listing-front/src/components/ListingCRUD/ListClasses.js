import React, { useEffect, useState } from 'react'
import * as CallServer from './CallServer'
import image from '../../image.jpg'


export const ListClasses = () => {

    const [state, setstate] = useState([])

    const listClass = async () => {
        try {
            const res = await CallServer.listClass();
            const data = await res.json();
            setstate(data.classes);
        } catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        listClass();
    }, [])

    const divStyleCard = {
        width: '18rem',
        display: 'inline-block',
        margin: '6px',
    }

    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col">
                    <div className="card" style={ divStyleCard }>
                    <img src={image} className="card-img-top" alt="imagen del componente"></img>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Read More</a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
