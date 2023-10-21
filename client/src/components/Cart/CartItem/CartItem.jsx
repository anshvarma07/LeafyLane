import React, { useContext } from "react";
import { MdClose } from "react-icons/md";
import "./CartItem.scss";
import { Context } from "../../../utils/context";

export default function CartItem() {
  const { cartItems, handleCartProductQuantity, handleRemoveFromCart } =
    useContext(Context);
  return (
    <div className="cart-products">
      {cartItems.map((item) => {
        return (
          <div key={item.id} className="search-result-item">
          {console.log()}
            <div className="image-container">
              <img src={item.product.image} alt="" />
            </div>
            <div className="prod-details">
                
              <span className="name">{item.product.title} Plant</span>
              <MdClose className="close-btn" onClick={()=>handleRemoveFromCart(item)}/>
              <div className="quantity-buttons">
                <span onClick={()=>handleCartProductQuantity('dec',item)}>-</span>
                <span>{item.quantity}</span>
                <span onClick={()=>handleCartProductQuantity('inc',item)}>+</span>
              </div>
              <div className="text">
                <span>{item.quantity}</span>
                <span>x</span>
                <span className="highlight">
                  <span>&#8377;{item.product.price}</span>
                  <span>=&#8377;{item.product.price*item.quantity}</span>
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
