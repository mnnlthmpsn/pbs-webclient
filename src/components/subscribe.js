const Subscribe = () => {
    return (
        <div className="h-56 flex flex-col font-light items-center justify-center w-full bg-[#1D2798]">
            <p className="text-white lg:text-lg">Subscribe to our Newsletter</p>
            <div className="flex flex-col lg:flex-row justify-center py-4 space-y-3 lg:space-y-0 px-4 lg:px-0 w-full">
                <input className="h-12 w-full lg:w-1/3 lg:rounded-l px-4 outline-none" placeholder="sam@sam.com"/>
                <button className="h-12 border self-end lg:rounded-r w-1/3 lg:w-auto px-6 lg:text-lg font-light text-white">Subscribe</button>
            </div>
        </div>
    )
}

export default Subscribe