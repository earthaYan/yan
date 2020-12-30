import axios from 'axios'
import {ref} from 'vue'
const result=ref(null)
const loading=ref(true)

interface PromiseRes{
    [propName: string]: any;
}
function useUrlAxios(methods: string,url: string,params?: object): Promise<PromiseRes>{
    return new Promise(
        function(resolve){
            if(methods=='get'){
                axios.get(url,{
                    params:params
                }).then((res)=>{
                    loading.value=false
                    result.value=res.data
                    const res1=[result.value,loading.value]
                    resolve(res1)
                })
            }else if(methods=='post'){
                axios.post(url,params).then(res=>{
                    loading.value=false
                    result.value=res.data
                })
            }
           
        }
    )
}
export {
    useUrlAxios
}
