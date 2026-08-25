import { DraftProdutSchema, ProductsSchemas } from "../types"
import {safeParse} from 'valibot'
import axios from "axios"



type ProductData ={ 
    [k: string]: FormDataEntryValue;
}
 
export async function addProduct(data: ProductData){
        
    try {
        const result = safeParse(DraftProdutSchema, {
            name: data.name,
            price: +data.price
        })
        if(result.success){
            const url = `${import.meta.env.VITE_API_URL}/api/products`
            await axios.post(url, {
                name: result.output.name,
                price: result.output.price
            })

        }else{
            throw new Error("Datos no validos");
        }
        
    } catch (error) {
        console.log(error)
    }
} 


export async function getProducts() {

    try {
        const url = `${import.meta.env.VITE_API_URL}/api/products`

        const {data} = await axios(url)
        console.log(data.data)

        const result = safeParse(ProductsSchemas, data.data)

        if (result.success) {
            return result.output
        }else{
            throw new Error('hubo un error')
        }
    } catch (error) {
        console.log(error)
        
    }
    
}