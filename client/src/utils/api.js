import axios from "axios";


export const fetchDataFromApi = async (url) =>{
    try {
        const {data}= await axios.get("https://fakestoreapi.com"+url);
        console.log(data)
        return data;
        
    } catch (error) {
        console.log(error)
        return error;
}
}

