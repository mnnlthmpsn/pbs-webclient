import { XIcon } from "@heroicons/react/solid"
import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import BillingInfo from "../components/billingInfo"
import { CartContext } from "../contexts/cartContext"
import { decryptPayload } from "../utils/enc"

const Checkout = () => {

    const { cart, removeFromCart } = useContext(CartContext)
    const [info, setInfo] = useState({ fname: '', lname: '', email: '', phone: '', other_phone: '', location: '' })
    const [payMed,setPayMed] = useState('')

    const [myCart, setCart] = useState(cart)

    const calculateDiscount = product => {
        const amt_to_deduct = (product.discount / 100) * product.price
        return product.price - amt_to_deduct
    }

    useEffect(() => {
        setCart(cart)
    }, [cart])

    return (
        <div className="flex flex-col justify-center px-4 lg:px-20">
            <div className="lg:h-24 py-4 flex flex-col items-start">
                <div className="flex lg:py-5 space-x-2">
                    <Link to="/" className="text-[#1D2798]">Home</Link>
                    <div>|</div>
                    <p>Checkout</p>
                </div>
            </div>

            <div className="border p-2 hidden lg:block">
                <div className="grid lg:grid-cols-8 items-center py-2 border-b px-4">
                    <p className="col-span-3 font-bold text-gray-500">Product</p>
                    <p className="font-bold text-gray-500">Amount</p>
                    <p className="font-bold text-gray-500 text-center">Quantity</p>
                    <p className="font-bold text-gray-500 text-right">Total</p>
                </div>

                {
                    myCart.length > 0 ? myCart.map(item => {
                        const product = decryptPayload(item.id.toString(), item.product)
                        return (
                            <div key={item.id} className="grid lg:grid-cols-8 py-2 items-center px-4">
                                <div className="col-span-3">
                                    <img src={product.images.data[0].attributes.url} className="h-14 w-auto" />
                                    <p>{product.title}</p>
                                </div>
                                <p><span className="text-xs">GHS </span>{calculateDiscount(product)}</p>
                                <input className="border outline-none p-2 text-center" min="1" step="1" type='number' />
                                <p className="text-right"><span className="text-xs">GHS </span>{calculateDiscount(product) * item.qty}</p>
                                <div className="flex justify-end">
                                    <XIcon className="h-4 cursor-pointer" onClick={() => removeFromCart(item.id)} />
                                </div>
                            </div>
                        )
                    }) : <div className="flex flex-col items-center justify-center py-20">
                        <p className="text-center">No items in Cart</p>
                        <Link to='/' className="bg-[#1D2798] px-8 py-2 text-white rounded hover:scale-110 duration-150 ease-out my-2">Shop Now</Link>
                    </div>
                }
            </div>

            {/* mobile checkout */}
            <p>Checkout for mobile view here</p>

            <BillingInfo info={info} setInfo={setInfo}/>

            <hr className="mt-6" />

            <p className="pt-5 pb-2 text-lg font-semibold text-gray-500">Payment Method</p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-2">
                <div className="flex flex-col">
                    <label className="py-1 flex items-center gap-x-3">
                        <input type='radio' name="payment_med" value='MOM' />
                        Mobile Money
                    </label>
                </div>

                <div className="flex flex-col">
                    <label className="py-1 flex items-center gap-x-3">
                        <input type='radio' name="payment_med" value='CRD' />
                        Card Payment (VISA | MasterCard)
                    </label>
                </div>

                <div className="flex flex-col">
                    <label className="py-1 flex items-center gap-x-3">
                        <input type='radio' name="payment_med" value='ON_DELIVERY' />
                        Pay on Delivery
                    </label>
                </div>
                
            </div>
        </div>
    )
}

export default Checkout