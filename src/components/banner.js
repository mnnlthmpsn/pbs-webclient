import { ChevronLeftIcon, ChevronRightIcon, ArrowRightIcon } from '@heroicons/react/solid';
import Slider from 'react-animated-slider'
import 'react-animated-slider/build/horizontal.css';


const Banner = () => {

    const nextButton = () => {
        return (
            <div className='rounded-full backdrop-blur p-2 bg-white/50 flex items-center justify-center'>
                <ChevronRightIcon className='h-4' />
            </div>
        )
    }

    const prevButton = () => {
        return (
            <div className='rounded-full backdrop-blur p-2 bg-white/50 flex items-center justify-center'>
                <ChevronLeftIcon className='h-4' />
            </div>
        )
    }

    return (
        <div className="mb-2 mb-lg-0 hidden md:block">
            <Slider autoplay={3000} nextButton={nextButton()} previousButton={prevButton()}>
                {
                    [1, 2, 3, 4].map(item => (
                        <div className='grid grid-cols-2 align-start' style={{ backgroundImage: 'url(/assets/img/slide-1.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                            <div className='flex flex-col items-start justify-center pl-24'>
                                <h1 className='font-bold text-4xl'>Some Long Christmas title here</h1>
                                <p className='text-lg pb-4'>Short description</p>
                                <p className='text-3xl font-bold text-[#1D2798]'>Product Title</p>
                                <div className='flex items-end gap-x-2 pb-4'>
                                    <p className='text-lg'><span className='text-sm'>GHS</span> <span className='font-semibold text-2xl'>45.00</span></p>
                                    <p className='text-lg'><del className='text-red-400'>55.00</del></p>
                                </div>
                                <div className='flex gap-x-2 items-center rounded-full text-white bg-[#1D2798] border py-3 px-8 cursor-pointer hover:scale-110 duration-300'>Shop Now <ArrowRightIcon className='h-4' /> </div>
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </div>
    )
}

export default Banner