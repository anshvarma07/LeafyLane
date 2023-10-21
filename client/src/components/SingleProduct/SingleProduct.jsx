import React, { useEffect, useState,useContext } from "react";
import "./SingleProduct.scss";
import axios from "axios";
import { useParams } from "react-router-dom";
import {fetchDataFromApi} from "../../utils/api"

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import { Context } from "../../utils/context";

export default function SingleProduct() {
  const { id } = useParams();
  const [catwithid, setcatwithid] = useState();
  const [quantity,setQuantity]=useState(1)
  const {handleAddtoCart}=useContext(Context)

  useEffect(() => {
    getCategories();
    // eslint-disable-next-line
  }, []);

  const getCategories = () => {
    fetchDataFromApi("/products/"+id).then(
      (res) => {
        // console.log(res);
        setcatwithid(res);
      }
    );
  };
  if (!catwithid) return;
  
  const product = catwithid;


  const inc=()=>{
    setQuantity(quantity+1)
  }
  const dec=()=>{
    if(quantity>1){
    setQuantity(quantity-1)
    }
  }
  
  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img src={product.image} alt="" />
          </div>
          {/* {console.log(catwithid)} */}
          <div className="right">
            <span className="name">{product.title}</span>
            <span className="price">&#8377;{product.price}</span>
            <span className="desc">{product.description}</span>
            <div className="cart-buttons">
              <div className="quantity-buttons">
                <span onClick={dec}>-</span>
                <span>{quantity}</span>
                <span onClick={inc}>+</span>
              </div>
              <button className="add-to-cart-button" onClick={()=>{
                handleAddtoCart(product,quantity)
                setQuantity(1)
              }}>
                <FaCartPlus size={20} />
                ADD TO CART
              </button>
            </div>
            <span className="divider" />
            <div className="info-item">
              <span className="text-bold">
                Category:{" "}
                <span>{product.category}</span>
              </span>
              <span className="text-bold">
                Share:
                <span className="social-icons">
                  <FaFacebookF size={16} className="IconMargin" />
                  <FaTwitter size={16} className="IconMargin" />
                  <FaInstagram size={16} className="IconMargin" />
                  <FaLinkedinIn size={16} className="IconMargin" />
                  <FaPinterest size={16} className="IconMargin" />
                </span>
              </span>
            </div>
          </div>
        </div>
        <RelatedProducts />
      </div>
    </div>
  );
}
