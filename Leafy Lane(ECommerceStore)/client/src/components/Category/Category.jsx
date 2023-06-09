import React, { useState, useEffect } from "react";
import "./Category.scss";
import Products from "../Products/Products";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Category() {
  const {id} =useParams();
  const [catwithid,setcatwithid]=useState()
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

  useEffect(()=>{
    getCategories()
    // eslint-disable-next-line
  },[])



  const getCategories =()=>{
    fetchDataFromApi(`/api/products?populate=*&[filters][categories][id]=${id}`)
    .then(res => {
      console.log(res);
      setcatwithid(res)
    })
  }
  return (
    <div className="category-main-content">
      <div className="layout">

       {console.log("catwithid.categories.data[0].attributesssss")}
       {/* {console.log(catwithid.data[0].attributes.categories.data[0].attributes.title)} */}
        <div className="category-title">{catwithid?.data[0]?.attributes?.categories?.data[0]?.attributes?.title} Plants</div>
        <Products innerPage={true} products={catwithid}  />
      </div>
    </div>
  );
}
