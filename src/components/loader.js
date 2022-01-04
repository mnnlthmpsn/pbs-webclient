import axios from "axios";
import { Fragment, useState } from "react"
import Loader from "react-loader-spinner";

const MyLoader = () => {

    const [isLoading, setIsLoading] = useState(true)

    // Add a request interceptor
    axios.interceptors.request.use(function (config) {
        // Do something before request is sent
        setIsLoading(true)
        return config;
    }, function (error) {
        // Do something with request error
        setIsLoading(false)
        return Promise.reject(error);
    });

    // Add a response interceptor
    axios.interceptors.response.use(function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        setIsLoading(false)
        return response;
    }, function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        setIsLoading(false)
        return Promise.reject(error);
    });

    return (
        <Fragment>
            {isLoading && (
                <div className="flex justify-center items-center backdrop-blur bg-white/40 fixed top-0 z-20 w-screen h-screen">
                    <Loader
                        type="BallTriangle"
                        color="#1D2798"
                        height={100}
                        width={100}
                    />
                </div>
            )}
        </Fragment>
    )
}

export default MyLoader