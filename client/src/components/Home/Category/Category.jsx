import { useState, useEffect } from "react";
import "./Category.scss";
import {useNavigate} from 'react-router-dom'

const Category = ({ category }) => {
  const navigate=useNavigate()
  const [categoryArray, setCategoryArray] = useState([]);

  useEffect(() => {
    if (Array.isArray(category?.data)) {
      setCategoryArray(category.data);
    }
  }, [category]);

  if (category === undefined || !Array.isArray(category?.data)) {
    // Render a loading state or return null if desired
    return null;
  }

  return (
    <div className="shop-by-category">
      <div className="categories">
        {categoryArray.map((item) => (
          <div key={item.id} className="category" onClick={()=>navigate(`/category/${item.id}`)}>
          <img src={item.attributes.img} border='0' alt='INDOOR1'/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
