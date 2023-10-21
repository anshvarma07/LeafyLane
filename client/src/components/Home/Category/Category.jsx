import { useState, useEffect } from "react";
import "./Category.scss";
import {useNavigate} from 'react-router-dom'

const Category = ({ category }) => {
  const navigate=useNavigate()
  // const [categoryArray, setCategoryArray] = useState([]);

  // useEffect(() => {
  //   if (Array.isArray(category?.data)) {
  //     setCategoryArray(category.data);
  //   }
  // }, [category]);

  // if (category === undefined || !Array.isArray(category?.data)) {
  //   // Render a loading state or return null if desired
  //   return null;
  // }

  return (
    <div className="shop-by-category">
      <div className="categories">
      {/* Needs a fix in navigating */}
        {category?.map((item) => (
          <div key={item} className="category" onClick={()=>navigate(`/category`)}>
          <div>{item}</div>
          {/* <img src={item} border='0' alt='INDOOR1'/> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
