import React, { useState, useEffect } from "react";
import "./Category.scss";
import Products from "../Products/Products";
import { useParams } from "react-router-dom";
import axios from "axios";
import { fetchDataFromApi } from "../../utils/api";
import Product from "../Products/Product/Product";

export default function Category() {
  const {id} =useParams();
  const [catwithid,setcatwithid]=useState()

  // const fetchDataFromApi = async (url) => {
  //   try {
  //     const { data } = await axios.get(
  //       "https://fakestoreapi.com/products"
  //     );
  //     return data;
  //   } catch (error) {
  //     console.log(error);
  //     return error;
  //   }
  // };

  useEffect(()=>{
    getCategories()
    // eslint-disable-next-line
  },[])



  const getCategories =()=>{
    fetchDataFromApi(`/products/category/${id}`)
    .then(res => {
      console.log(res);
      setcatwithid(res)
    })
  }

  return (
    <div className="category-main-content">
    Cat
      <div className="layout">
        <div className="category-title">{catwithid?.data} Plants</div>
        {catwithid?.map((item,index)=>(
          <Product key={item.id} id={item.id} data={item} />
        ))}
        
      </div>
    </div>
  );
}
