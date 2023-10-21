import React, { useState , useEffect } from 'react';
import Product from './Product/Product';
import "./Products.scss";
import { fetchDataFromApi } from '../../utils/api';

export default function Products({innerPage, headingText }) {
  const [products,setProducts]=useState(null)

  useEffect(()=>{
    // Assuming fetchDataFromApi returns a promise
    fetchDataFromApi("/products")
      .then((data) => {
        // Update the state with the fetched data
        setProducts(data);
      })
      .catch((error) => {
        // Handle any errors that occur during the API request
        console.error("Error fetching data:", error);
      });
    },[])

  // if (products === undefined || !Array.isArray(products)) {
  //   // Render a loading state or return null if desired
  //   return null;
  // }



  return (
    <div className='products-container' id='yahaScrollHo'>
      {!innerPage && <div className="sec-heading">{headingText}</div>}
      <div className="products">
        {products?.map((item) => (
          <Product key={item.id} id={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}


























// import React from 'react'
// import Product from './Product/Product'
// import "./Products.scss"

// export default function Products({products,innerPage, headingText}) {
//   return (
//     <div className='products-container'>
//       {!innerPage && <div className="sec-heading">{headingText}</div>}
//       <div className="products">
//           {products.data.map((item)=>{
//             <Product key={item.id} id={item.id} data={item.attributes}/>
//           })}
          
//       </div>
//     </div>
//   )
// }
