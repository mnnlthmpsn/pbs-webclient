import { useEffect, useState } from "react"
import { req_get_testimonials } from "../api/base"

const Testimonials = () => {

    const [testimonials, setTestimonials] = useState([])

    const getTestimonials = async () => {
        const { data } = await req_get_testimonials()
        console.log(data)
        setTestimonials(data)
    }

    useEffect(() => {
        getTestimonials()
    }, [])

    return (
        <div className='pb-8 lg:pb-16 border-b'>
            <p className='py-5 lg:py-16 text-center font-bold text-lg lg:text-3xl'>Testimonials</p>
            <div className="grid grid-cols-1 grid-cols-md-2 lg:grid-cols-4 gap-8 px-5 lg:px-20">
                {
                    testimonials.map(tmony => (
                        <div className='flex flex-col items-center gap-3' key={tmony.id}>
                            <div className="h-56 w-56 overflow-hidden rounded-full">
                                <img className="w-full h-full object-cover hover:scale-110 duration-500" src={tmony.attributes.image.data.attributes.url} alt={tmony.attributes.arthur} />
                            </div>
                            <p className='text-center'>{tmony.attributes.content}</p>
                            <p className='italic font-semibold'>{tmony.attributes.author}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Testimonials