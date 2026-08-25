
import {array, boolean, number, object, string, type InferOutput} from 'valibot'


export const DraftProdutSchema = object({

    name: string(),
    price: number()
})

export const ProductSchema = object ({
    id: number(),
    name: string(),
    price: number(),
    availability: boolean()

})

export const ProductsSchemas = array(ProductSchema)

export type Product = InferOutput<typeof ProductSchema>