import React, { useEffect, useState,useContext } from "react";
import "./SingleProduct.scss";
import axios from "axios";
import { useParams } from "react-router-dom";

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
  const params = {
    headers: {
      Authorization: "bearer " + process.env.REACT_APP_STRIPE_API_KEY,
    },
  };

  const fetchDataFromApi = async (url) => {
    try {
      const { data } = await axios.get(
        process.env.REACT_APP_DEV_URL + url,
        params
      );
      return data;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  useEffect(() => {
    getCategories();
    // eslint-disable-next-line
  }, []);

  const getCategories = () => {
    fetchDataFromApi(`/api/products?populate=*&[filters][id]=${id}`).then(
      (res) => {
        // console.log(res);
        setcatwithid(res);
      }
    );
  };
  if (!catwithid) return;
  const product = catwithid.data[0].attributes;


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
            <img src={product.img} alt="" />
          </div>
          {/* {console.log(catwithid)} */}
          <div className="right">
            <span className="name">{product.title}</span>
            <span className="price">&#8377;{product.Price}</span>
            <span className="desc">{product.desc}</span>
            <div className="cart-buttons">
              <div className="quantity-buttons">
                <span onClick={dec}>-</span>
                <span>{quantity}</span>
                <span onClick={inc}>+</span>
              </div>
              <button className="add-to-cart-button" onClick={()=>{
                handleAddtoCart(catwithid.data[0],quantity)
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
                <span>{product.categories?.data[0]?.attributes?.title}</span>
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
