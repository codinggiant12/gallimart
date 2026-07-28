import { API_ENDPOINTS } from "../../API.Constants";
import { api } from "../axios";
import {AllproductResponse} from "./AllProduct.interface"
import { Product } from "./AllProduct.interface";



// const AllProduct=async()=>{
//  const ApiResponse=  await api.get();

// }


export const AllProduct={
    getAllProducts:async():Promise<AllproductResponse> =>{
        const response=await api.get(API_ENDPOINTS.PRODUCTS.GET_ALL);
        // setProducts(response.data);
        console.log(response);
        
        return response.data;

    }
}
// setProducts:React.Dispatch<React.SetStateAction<Product[] | undefined>>

