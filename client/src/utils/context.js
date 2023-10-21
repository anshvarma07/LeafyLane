import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchDataFromApi } from "./api";

export const Context= createContext();

const AppContext =({children})=>{
    const [categories,setCategories]= useState();
    const [products,setProducts]= useState();
    const [cartItems,setCartItems]=useState([])
    const [cartCount,setCartCount]=useState(0)
    const [cartSubTotal,setCartSubTotal]=useState(0)
    const location=useLocation()

    useEffect(()=>{
        window.scrollTo(0,0)
    },[location])
    
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


    useEffect(()=>{
        let subTotal=0;
        let count=0;
        // eslint-disable-next-line
        cartItems.map((item)=>{count+= item.quantity})
        setCartCount(count)

        // eslint-disable-next-line
        cartItems.map((item)=>{
            subTotal+=item.product.price * item.quantity;
        })
        setCartSubTotal(subTotal)
    },[cartItems])

    const handleAddtoCart =(product,quantity)=>{
        let new_obj={
            quantity:quantity,
            product:product
        }
        let items = [...cartItems];
        let index = items.findIndex((p)=>p.product.id===product.id)
        if(index!== -1){
            items[index].quantity+=quantity   
        }
        else{
            items=[...cartItems,new_obj]
        }
        setCartItems(items)
        console.log(cartItems)
        
    }

    const handleRemoveFromCart =(product)=>{
        let items = [...cartItems]
        items=items.filter((p) => p.id !== product.id)
        setCartItems(items);

    }

    const handleProductQuantity =(type,product)=>{}
    const handleCartProductQuantity =(type,product)=>{
        let items = [...cartItems];
        let index = items.findIndex((p)=>p.product.id===product.product.id)
        console.log("index")
        if (type==="inc") {
            items[index].quantity+=1
        }
        else if (type==="dec") {
            if (items[index].quantity===1) {
                return
            }
            else{
                items[index].quantity-=1
            }
        }
        setCartItems(items)
    }
    
    return <Context.Provider value={{
        categories,
        setCategories,
        products,
        setProducts,
        cartItems,setCartItems,cartCount,setCartCount,cartSubTotal,setCartSubTotal,handleAddtoCart,handleRemoveFromCart,handleProductQuantity
        ,handleCartProductQuantity
    }}
    >
    {children}
    </Context.Provider>
};



export default AppContext;