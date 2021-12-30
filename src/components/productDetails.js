import { XIcon } from "@heroicons/react/solid"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../contexts/cartContext"

const ProductDetails = ({ open, setOpen, product }) => {

    const { addToCart } = useContext(CartContext)
    
    const calculateDiscount = () => {
        const amt_to_deduct = (product.attributes.discount / 100) * product.attributes.price
        return product.attributes.price - amt_to_deduct
    }

    return (
        <div className={`z-20 fixed top-0 right-0 h-screen w-full lg:w-1/2 backdrop-blur-sm bg-white/80 overflow-auto border-l translate-x-100 duration-300 ease-in-out ${open ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="flex sticky top-0 px-3 lg:px-10 items-center backdrop-blur-sm bg-white/50 h-14 justify-between w-full">
                <p className="text-2xl font-bold">{product.attributes.title}</p>
                <XIcon className='h-8 w-8 cursor-pointer' onClick={() => setOpen(!open)} />
            </div>

            <div className="pt-5 pb-2 px-3 lg:px-10 space-y-5">
                <div>
                    <p className="font-bold text-lg py-3">Product Description</p>
                    <p> {product.attributes.description} </p>
                </div>
                <div>
                    <p className="font-bold text-lg py-3">Pricing</p>
                    <p> Discount: <span className="font-bold">{product.attributes.discount}%</span> </p>
                    <p> Original Price: <span className="text-xs">GHS</span> <span className="font-bold">{product.attributes.price}</span> </p>
                    <p> Discount Price: <span className="text-xs">GHS</span> <span className="font-bold">{calculateDiscount()}</span> </p>
                </div>
                <div>
                    <p className="font-bold text-lg py-3">More Info</p>
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        {product.attributes.images.data.map(img => (
                            <img src={img.attributes.url} key={img.attributes.url}/>
                        ))}
                    </div>
                </div>
                <div className="w-full h-10 2xl:h-12 flex">
                    <button className="w-full h-full bg-[#1D2798] text-white 2xl:text-base  hover:bg-[#1D2781] duration-150 border-r" onClick={() => addToCart(product)}>Add to Cart</button>
                    <Link to='/checkout
                    
                    '><button className="w-full h-full bg-[#999] text-white 2xl:text-base hover:bg-gray-500 duration-150">Checkout</button></Link>
                </div>
            </div>

        </div>
    )
}

export default ProductDetails 