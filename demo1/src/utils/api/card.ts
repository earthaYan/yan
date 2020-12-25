import  http  from "../http";

export function getDetailById(params: object){
    return http.get('getDetailById',params)
}