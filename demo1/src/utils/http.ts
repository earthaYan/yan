import request from './request'

const http={
    get(url: string,params: object){
        const config={
            methods:"get",
            url:url,
            params:{}
        }
        if(params) config.params=params
        return request(config)
    }
}
export default http