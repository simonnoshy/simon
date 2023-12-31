import React, { useEffect, useState } from 'react';
import Product from '../item/product';
import { getProducts } from '../../../services/product.service';

export default function Products() {
  const [products, setProducts] = useState([]);

  const getData = async () => {
    const data = await getProducts();
    const { products } = data;
    setProducts(products);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        {products.map((p) => (
          <Product key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}