import axios from "axios";
axios.defaults.withCredentials = true
const Backend =  process.env.REACT_APP_BACKEND_URL

export const get = async (url, params ={}) => {
    try{
        const result = await axios.get(Backend+url, {params: params})
    return result
    }
    catch(err){
        console.log("Getting from back end axios error")
        console.log( "Url with error" + url)
        console.log(err.message)
    }
    
}
export const post = async (url, params ={}) => {
    const result = await axios.post(Backend+url, params)
    return result
}

export const put = async (url, params ={}) => {
    const result = await axios.put(Backend+url, params)
    return result
}

export const statics =  (url) => {
    return Backend + "/files/" + url
}

