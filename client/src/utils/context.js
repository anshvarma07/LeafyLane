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
        console.log("loc changed")



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
        cartItems.map((item)=>{count+= item.attributes.quantity})
        setCartCount(count)

        // eslint-disable-next-line
        cartItems.map((item)=>{
            subTotal+=item.attributes.Price * item.attributes.quantity;
        })
        setCartSubTotal(subTotal)
    },[cartItems])

    const handleAddtoCart =(product,quantity)=>{
        let items = [...cartItems];
        let index = items.findIndex((p)=>p.id===product.id)
        if(index!== -1){
            items[index].attributes.quantity += quantity;
            console.log("-1wala")
            
        }else{
            product.attributes.quantity=quantity
            items=[...items,product]
            // console.log(product.attributes.quantity)
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
        let index = items.findIndex((p)=>p.id===product.id)
        if (type==="inc") {
            items[index].attributes.quantity+=1
        }
        else if (type==="dec") {
            if (items[index].attributes.quantity===1) {
                return
            }
            else{
                items[index].attributes.quantity-=1
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