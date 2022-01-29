import axios from "axios"

export const BASE_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:1337/api' : 'https://pbs-back.herokuapp.com/api'

export const req_get_testimonials = async () => {
    try {
        const { data } = await axios.get(`${BASE_URL}/testimonials?populate=*`)
        return data
    } catch (err) {
        err.response && console.log(err.response)
        alert('sorry error occured')
    }
}