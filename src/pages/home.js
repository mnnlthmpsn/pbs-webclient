import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { req_get_categories } from "../api/categories"
import Subscribe from "../components/subscribe"
import Testimonials from "../components/testimonials"
import Banner from "../components/banner"

const Home = () => {

    const [categories, setCategories] = useState([])

    const getCategories = async () => {
        const { data } = await req_get_categories()
        console.log(data)
        setCategories(data)
    }

    useEffect(() => {
        getCategories()
    }, [])

    return (
        <div className="flex flex-col justify-center">
            <Banner />

            <div className="h-24 px-10 py-4 flex items-center">
                <p className=" text-center lg:text-left w-full lg:pl-10 font-bold text-2xl">Browse Categories</p>
            </div>
            <div className="grid grid-cols-1 p-10 lg:grid-cols-3 gap-10 lg:px-24">
                {
                    categories.map(category => (
                        <Link to={`category/${category.attributes.slug}`} state={{ category: category.attributes.title }} key={category.id}>
                            <img src={category.attributes.image.data.attributes.url} className="scale-95 hover:scale-100 duration-500 ease-out z-0 cursor-pointer" />
                            <p className="text-center text-lg pt-2 font-light">{category.attributes.title}</p>
                        </Link>
                    ))
                }
            </div>

            <Subscribe />
            <Testimonials />
        </div>
    )
}

export default Home