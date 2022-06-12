import React, { useMemo, useContext } from "react";

import { useNavigate, Navigate, useParams } from "react-router-dom";
import { Producthelper } from "../helpers/Producthelperfind";
import AddCartButton from "../components/AddCartButton";

const ShowPage = () => {

  const navigate = useNavigate();

  const productid = useParams();

  const idProd = Number(productid.idProduct);

  const product = Producthelper(idProd);

  const handleReturn = () => navigate(-1);
  console.log(productid ) 
  console.log(idProd)
    console.log(product)
      console.log(navigate)
        
if (!idProd) {
    return <Navigate to="/store" />;
  }
 console.log( idProd  )
  return (<>
 
    {
      

      product.map(products => (
        <div className="container-card" key={products.id}>
          <div className="card">
            <div>
              <img src={products.thumbnailUrl} alt="imagen"></img>
            </div>
            <div className="contenido-card">
              <h2 className="title-cards"> {products.title} </h2>
              <p className="description"> Descripcion: {products.descripcion} </p>
              <p> stock disponible: {products.stock} </p>
              <p> Precio : ${products.precio} </p>
              <AddCartButton
              id={products.id } />
              <button onClick={handleReturn} className="button"> Return </button>
            </div>
          </div>
        </div>
      ))
    }
  </>
  );
};

export default ShowPage;


