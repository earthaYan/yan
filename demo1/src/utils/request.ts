import axios from 'axios'
const instance=axios.create({
    baseURL:'http://localhost:3000/api/',
    timeout:6000
})
instance.interceptors.request.use((config)=>{
    return config
})
instance.interceptors.response.use((res)=>{
    return res
})
export default instance