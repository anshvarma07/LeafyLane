import React,{useEffect, useContext} from "react";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from '../Products/Products'
import "./Home.scss"
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";

export default function Home() {

  const {categories,setCategories,products,setProducts}=useContext(Context);
  useEffect(()=>{
    getCategories()
    getProducts()
    // eslint-disable-next-line
  },[])



  const getCategories =()=>{
    fetchDataFromApi("/api/categories")
    .then(res => {
      // console.log(res);
      setCategories(res)
    })
  }

  
  const getProducts =()=>{
    fetchDataFromApi("/api/products")
    .then(res => {
      // console.log(res);
      setProducts(res)
    })
  }

  return (
    <div className="home">
      <Banner />
      <div className="main-content">
        <div className="layout">
          <Category  category={categories}/>
          <Products products={products} headingText="Related Products" />
        </div>
      </div>
    </div>
  );
}
