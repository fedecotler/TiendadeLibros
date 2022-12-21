import React from "react";
import { useParams } from "react-router-dom";
import libros from "../utils/Libros.jsx";
import ItemList from "./ItemList.jsx";
import { useState, useEffect } from "react";


export default function Categoria() {

  let { category } = useParams();
  let [data, setData] = useState([]);
  let filtro = libros.filter((x) => (x.category === category))
  if(filtro.length===0) {
    filtro=libros
  }
  
  useEffect(() => {
    const getData = new Promise(resolve => {
        setTimeout(() => {
        resolve(filtro);   
    }, 100);
    });
    getData.then(res => setData(res));
})

  return (
    <div>
      <h2 className="text-center mt-5 mb-5">Libros</h2>
      <div className="container">
      <ItemList data={data}></ItemList>
    </div>
    </div>
  );
}