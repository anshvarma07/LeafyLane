import React from 'react'
import "./Product.scss"
import { useNavigate } from 'react-router-dom';

export default function Product(data) {
  const navigate=useNavigate()
  return (
    
    <div className="product-card" onClick={()=>navigate("/product/" + data.id)}>
    {/* {console.log(data.data)} */}
      <div className="thumbnail">
        <img src={data.data.img} alt="" />
      </div>

      <div className="prod-details">
        <span className="name">{data.data.title}</span>
        <span className="price">&#8377;{data.data.Price}</span>
      </div>
    </div>
  )
}
