import axios from "axios";
import { BASE_URL } from "./base";
import * as qs from 'qs'

export const req_get_categories = async () => {
    const query = qs.stringify({
        fields: ['slug', 'title'],
        populate: '*'
    }, { encodeValuesOnly: true })
    try {
        const { data } = await axios.get(`${BASE_URL}/categories?${query}`)
        return data
    } catch (err) {
        err.response && console.log(err.response)
        alert('an error occured')
    }
}

export const req_get_products = async cat_slug => {
    const query = qs.stringify({
        filters: { in_stock: { $eq: true }, category: { slug: cat_slug } },
        fields: ['slug', 'title', 'description', 'price', 'discount'],
        populate: '*'
    }, { encodeValuesOnly: true })

    try {
        const { data } = await axios.get(`${BASE_URL}/products?${query}`)
        return data
    } catch (err) {
        err.response && console.log(err.response)
        alert('sorry error occured')
    }
}