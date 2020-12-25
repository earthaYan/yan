//
// 类型检查->
// 1.类型推断[无需更改] 
function split(str){
    return str.split(' ')
}

/**
 * split("23")// 类型推断 不报错
add("hello",11) 不报错
split(23)// 类型推断 报错
*/
// 2.类型注释
// @flow
function add(x: number,y: number): number{
    return x+y
}
// @flow
let arr: Array<number>=[1,2,3]
arr.push('hello')   //报错,数组元素为数字类型

class Bar{
    x: string;
    y: string|number;
    z: boolean;

    constructor(x: String,y: string|number){
        this.x=x
        this.y=y
        this.z=false
    }
}
var bar: Bar = new Bar('hello',4)
var obj: {a:string,b:number,c:Array<string>,d: Bar}={
    a: 'hello',
    b:11,
    c:['hello','world'],
    d:new Bar('hello',3)
}

var foo: ?string =null