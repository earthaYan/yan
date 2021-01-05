import axios ,{AxiosRequestConfig,AxiosResponse} from 'axios'
import { ElLoading } from 'element-plus';
let loading: any
const startLoading = () => {
    const options = {
        lock:true,
        text:"loading...",
        background:"rgba(0,0,0,.7)"
    }
    loading=ElLoading.service(options)
}
const endLoading = () => {
    loading.close()
}
// 请求拦截
axios.interceptors.request.use((config: AxiosRequestConfig): AxiosRequestConfig => {
    startLoading()
    return config
})
// 响应拦截
axios.interceptors.response.use((response: AxiosResponse<any>): AxiosResponse<any> => {
    endLoading()
    return response
},error=>{
    endLoading()
    return Promise.reject(error)
})
export default axios