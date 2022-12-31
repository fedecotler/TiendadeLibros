import React from "react";
import { useCartContext } from "./CartContext";

const ItemCart = ({ product }) => {
  const { removeProduct } = useCartContext();
  return (
    <div className="text-center mt-5 mb-5 container-fluid card mb-3 maximo-card row g-1 col-md-3 rounded-start">
      <img
        className="img-fluid rounded-start"
        src={product.image}
        alt="imagen"
      ></img>
      <div>
        <p>Titulo: {product.name}</p>
        <p>Categoria: {product.category}</p>
        <p>Precio: {product.price}</p>
        <p>Cantidad: {product.quantity}</p>
        <p>Subtotal: ${product.quantity * product.price}</p>
        <button
          className="btn btn-primary"
          onClick={() => removeProduct(product.id)}
        >
          Eliminar Productos
        </button>
      </div>
    </div>
  );
};

export default ItemCart;
