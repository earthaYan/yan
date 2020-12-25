// 类型检查->
// 1.类型推断[无需更改] 
function split(str) {
  return str.split(' ');
}
/**
 * split("23")// 类型推断 不报错
add("hello",11) 不报错
split(23)// 类型推断 报错
*/
// 2.类型注释


function add(x, y) {
  return x + y;
}

let arr = [1, 2, 3];
arr.push('hello'); //报错,数组元素为数字类型

class Bar {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.z = false;
  }

}

var bar = new Bar('hello', 4);
var obj = {
  a: 'hello',
  b: 11,
  c: ['hello', 'world'],
  d: new Bar('hello', 3)
};
var foo = null;