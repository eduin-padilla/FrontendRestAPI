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
        <td className="p-3 text-lg text-gray-800">
            {formatCurrency(product.price)}
        </td>
        <td className="p-3 text-lg text-gray-800">
            {isAvailability ? 'Disponible' : 'No disponible' }
        </td>
        <td className="p-3 text-lg text-gray-800 ">
           <div className="flex gap-2 items-center">
            <button>Editar</button>
           </div>
        </td>
    </tr> 
  )
}
