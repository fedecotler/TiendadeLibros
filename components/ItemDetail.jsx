import React from "react";

export default function ItemDetail({ data = [] }) {
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
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
