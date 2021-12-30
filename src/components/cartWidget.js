import { ShoppingBagIcon, XIcon } from "@heroicons/react/solid"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { useState } from "react/cjs/react.development"
import { CartContext } from "../contexts/cartContext"
import { decryptPayload } from "../utils/enc"

const CartWidget = () => {

    const { cart, removeFromCart } = useContext(CartContext)
    const [open, setOpen] = useState(false)

    return (
        <div className="relative">
            <ShoppingBagIcon className='h-8 w-8 cursor-pointer text-gray-500' onClick={() => setOpen(!open)} />
            <div className="absolute top-1 -right-1 text-[#1D2798] text-xs font-bold">{cart?.length}</div>
            {
                cart.length > 0 && open && (
                    <div className="absolute border divide-y -right-10 p-2 rounded bg-white w-72">
                        {
                            cart.map(item => {
                                const product = decryptPayload(item.id.toString(), item.product)
                                return (
                                    <div className="grid grid-cols-6 py-2 items-center text-xs" key={item.id}>
                                        <p className="col-span-3">{product.title}</p>
                                        <input className="border rounded outline-none text-center col-span-2 p-2" type="number" min='1' onKeyPress={() => false} />
                                        <div className="flex justify-end">
                                            <XIcon className="h-3 cursor-pointer" onClick={() => removeFromCart(item.id)} />
                                        </div>
                                    </div>
                                )
                            })
                        }
                        {
                            <Link to='/checkout'>
                                <button className="w-full h-8 text-white rounded font-light text-xs flex items-center bg-[#1D2798] justify-center" onClick={() => setOpen(!open)}>Proceed to Checkout</button>
                            </Link>
                        }
                    </div>
                )
            }
        </div>
    )
}

export default CartWidget