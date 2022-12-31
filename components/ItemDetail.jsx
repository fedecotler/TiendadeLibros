import React, { useState } from "react";
import ItemCount from './ItemCount.jsx';

import { Link } from 'react-router-dom';
import { useCartContext } from './CartContext.jsx'


export default function ItemDetail({ data = [] }) {
  const [goToCart, setGoToCart] = useState(false);
  const { addProduct } = useCartContext();


  const onAdd = (quantity) => {
  setGoToCart(true);
  addProduct(data, quantity);
  }

  return (
    <div>
      <h2 className="text-center mt-5 mb-5">Libro</h2>
      <div className="container">
        <div className="card mb-3 maximo-card">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={data.image}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{data.name}</h5>
                <p className="card-title">Author: {data.author}</p>
                <p className="card-title">Price: {data.price}$</p>
                <p className="card-title">Category: {data.category}</p>
                <p className="card-text">Description:{data.description}</p>
                {
                  goToCart
                    ? <Link to='/cart'>Terminar compra</Link>
                    : <ItemCount initial={1} stock={5} onAdd={onAdd} />
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
