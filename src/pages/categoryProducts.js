import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { req_get_products } from "../api/categories";
import ProductDetails from "../components/productDetails";
import { CartContext } from "../contexts/cartContext";

const CategoryProducts = () => {
  const { cat_slug } = useParams();
  const { state } = useLocation();
  const [open, setOpen] = useState(false);
  const { addToCart } = useContext(CartContext);

  const [products, setProducts] = useState([]);

  const getCategoryProducts = async () => {
    const { data } = await req_get_products(cat_slug);
    setProducts(data);
  };

  const calculateDiscount = (product) => {
    const amt_to_deduct =
      (product.attributes.discount / 100) * product.attributes.price;
    return product.attributes.price - amt_to_deduct;
  };

  useEffect(() => {
    getCategoryProducts();
  }, []);

  return (
    <div className="flex flex-col justify-center">
      <div className="h-24 px-4 lg:px-10 py-4 flex flex-col items-start">
        <div className="flex lg:py-5 lg:pl-10 space-x-2">
          <Link to="/" className="text-[#1D2798]">
            Home
          </Link>
          <div>|</div>
          <p>{state.category}</p>
        </div>
        <p className="lg:pl-10 font-bold pt-2 lg:text-2xl">
          Browse "{state.category}" Products
        </p>
      </div>
      <div className="grid grid-cols-1 p-8 lg:grid-cols-3 gap-10 lg:px-24">
        {products.length > 0 &&
          products.map((product) => (
            <div key={product.id}>
              <div className="group relative">
                <div className="h-full w-full flex items-center justify-center">
                  <img
                    src={product.attributes.images.data[0].attributes.url}
                    className="scale-95 object-cover h-56 w-56 flex group-hover:scale-100 duration-500 ease-out z-0 cursor-pointer"
                    loading="lazy"
                  />
                </div>
                <div className="h-10 text-white grid grid-cols-2 items-center opacity-0 group-hover:opacity-100 duration-500">
                  <div
                    className="h-full bg-[#1D2798] w-full border-r flex items-center justify-center cursor-pointer"
                    onClick={() => addToCart(product)}
                  >
                    add to cart
                  </div>
                  <div
                    className="h-full bg-[#999] w-full flex items-center justify-center cursor-pointer"
                    onClick={() => setOpen(true)}
                  >
                    view details
                  </div>
                </div>
                <div className="absolute top-2 right-2 rounded-lg bg-[#1D2798] p-2 text-white">
                  <span className="text-xs">GHS</span>{" "}
                  {calculateDiscount(product)}
                </div>
              </div>
              <p className="text-center text-lg pt-2 font-light">
                {product.attributes.title}
              </p>
              <ProductDetails open={open} setOpen={setOpen} product={product} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
