import React, { useState, useContext } from 'react'
import { Navigate } from 'react-router-dom'
import AddCartButton from '../components/AddCartButton';

const Cards = ({
    precio,
    id,
    title,
    stock,
    thumbnailUrl,
    descripcion,
    cantidad
}) => {

    const [handler, setHandler] = useState(false)

    const showPage = () => setHandler(!handler)

    if (handler === true) return <Navigate to={`/ShowPage/${id}`} />

    return (<>
        {
            stock > 0 ?
                <div className='container-card' key={id} >
                    <div className='card' >
                        <div>
                            <img src={thumbnailUrl} alt='imagen'></img>
                        </div>
                        <div className="contenido-card">
                            <h2 className='title-cards'> {title} </h2>
                            <p className='description'> Descripcion: {descripcion} </p>
                            <p> stock disponible:     {stock} </p>
                            <p> Precio : ${precio} </p>
                             <AddCartButton
                              id={ id }
                              stock={ stock }
                              cantidad={ cantidad  }
                              /> 
                            <button onClick={() => showPage()} className='button'> View product </button>
                        </div>
                    </div>
                </div>
                :
                <div>
                </div>
        }
    </>
    )
}

export default Cards