import React from 'react';
import Product from './Product/Product';
import "./Products.scss";

export default function Products({ products, innerPage, headingText }) {
  if (products === undefined || !Array.isArray(products.data)) {
    // Render a loading state or return null if desired
    return null;
  }

  return (
    <div className='products-container' id='yahaScrollHo'>
      {!innerPage && <div className="sec-heading">{headingText}</div>}
      <div className="products">
        {products.data.map((item) => (
          <Product key={item.id} id={item.id} data={item.attributes} />
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
