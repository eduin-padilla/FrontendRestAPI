import { Link } from "react-router-dom"
import { type Product } from "../types"
import { formatCurrency } from "../util"

type roductDetailPros = {
    product : Product
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
            {isAvailability ? 'Disponible' : 'No disponible' }
        </td>
        <td className="p-3 text-lg text-gray-800  text-center">
           <div className="flex gap-2 items-center">
            <Link to={`productos/${product.id}/editar`} className="bg-indigo-600 text-white rounded-lg w-full p-2 uppercase font-bold text-xs text-center">Editar</Link>
           </div>
        </td>
    </tr> 
  )
}
