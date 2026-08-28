import { Form, Link, type ActionFunctionArgs, redirect } from "react-router-dom"
import { type Product } from "../types"
import { formatCurrency } from "../util"
import { deleteProduct } from "../services/ProductService"

type roductDetailPros = {
    product : Product
}

// eslint-disable-next-line react-refresh/only-export-components
export async function action({params}: ActionFunctionArgs) {

    if(params.id !== undefined){

        await deleteProduct(+params.id)
        return redirect('/')
    }
    
    
 }

export default function ProductDetails({product}: roductDetailPros) {

    const isAvailability = product.availability
  return (
    <tr className="border-b ">
        
        <td className="p-3 text-lg text-gray-800">
            {product.name}
        </td>
        <td className="p-3 text-lg text-gray-800 text-center">
            {formatCurrency(product.price)}
        </td>
        <td className="p-3 text-lg text-gray-800 text-center">
            <form method="POST">
                <button type='button' name="availability" value={product.availability.toString()} 
                className={`${isAvailability ? 'text-black' : 'text-red-600' } rounded-lg p-2 text-xs uppercase font-bold w-full border  border-black hover:cursor-pointer`}>
                    {isAvailability ? 'Disponible' : 'No disponible' }  
                </button>
            </form>
        </td>
        <td className="p-3 text-lg text-gray-800  text-center">
           <div className="flex gap-2 items-center">


            <Link to={`productos/${product.id}/editar`} className="bg-indigo-600 text-white rounded-lg w-full p-2 uppercase font-bold text-xs text-center">Editar</Link>


            <Form className="w-full" method="POST" 
            action={`productos/${product.id}/eliminar`}
            onSubmit={(e) => {
                if(!confirm('Eliminar?')){
                    e.preventDefault()
                }
            }}
            >

                <input type="submit" 
                className="bg-red-600 text-white rounded-lg w-full p-2 uppercase font-bold text-xs text-center"
                value='Eliminar'
                />
            </Form>
            
           </div>
        </td>
    </tr> 
  )
}
