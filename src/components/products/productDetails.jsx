import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById } from '../../services/product.service';

export const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProduct = async (id) => {
    const product = await getProductById(id);
    setProduct(product);
  };

  useEffect(() => {
    getProduct(id);
  }, [id]);

  return (
    <div className="container-fluid ">
        <div className="row d-flex justify-content-center algin-items-center mt-3">
      {product && (
        <>
          <div className="col-md-4 mb-3">
            <img src={product.thumbnail} alt="Card image cap" className="card-img-top algin-self-center" />
          
            <div className="fw-bold">
              <h1>{product.title}</h1>
              <p>Description: {product.description}</p>
              <p className="fw-bold">Price: {product.price} $</p>
              <div className="d-flex">
                <button className="btn btn-secondary ">Add to cart</button>
              </div>
            </div>
          </div>
        </>
      )}
    </div></div>
    
  );
};