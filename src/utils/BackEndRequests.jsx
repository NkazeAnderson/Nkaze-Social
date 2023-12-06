import axios from "axios";
axios.defaults.withCredentials = true
const Backend =  process.env.REACT_APP_BACKEND_URL


export const get = async (url, params ={}) => {
console.log(Backend+url)
    const result = await axios.get(Backend+url, {params: params})
    return result
}
export const post = async (url, params ={}) => {
console.log(Backend+url)
    const result = await axios.post(Backend+url, params)
    return result
}

export const put = async (url, params ={}) => {
console.log(Backend+url)
    const result = await axios.put(Backend+url, params)
    return result
}