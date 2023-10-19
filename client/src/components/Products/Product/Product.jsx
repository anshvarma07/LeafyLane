import React from 'react'
import "./Product.scss"
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';

export default function Product({data}) {
  const navigate=useNavigate()
  return (
    
    <div className="product-card" onClick={()=>navigate("/product/" + data.id)}>
    {console.log(data)}
      <div className="thumbnail">
        <img src={data.image} alt="" />
      </div>

      <div className="prod-details">
        <span className="name">{data.title}</span>
        {/* <span className="name">{data.description}</span> */}
        <span className="price">&#8377;{data.price}</span>
      </div>
    </div>
  )
}
