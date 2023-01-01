import React from "react";
import { useCartContext } from "./CartContext";
import { Link } from "react-router-dom";
import ItemCart from "./ItemCart.jsx";
import { getFirestore } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { addDoc } from "firebase/firestore";



export default function Cart() {
  const { cart, totalPrice } = useCartContext();

  const order = {
    buyer: {
      name: "Federico",
      email: "email@email.com",
      phone: "12345678",
      adress: "adress 123",
    },
    items: cart,
    total: totalPrice(),
  };

  const handleClick = () => {
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then(({ id }) => console.log(id));
  };


  if (cart.length === 0) {
    return (
      <div>
        <p>Tu Carrito Está Vacío</p>
        <button className="btn btn-primary">
          <Link to="/"> Continuar Compra</Link>
        </button>
      </div>
    );
  }

  return (
    <div>
      <>
        {cart.map((product) => (
          <ItemCart key={product.id} product={product} />
        ))}
        <p>Total: {totalPrice()}</p>
        <button onClick={handleClick}>Emitir Compra</button>
      </>
    </div>
  );
}
