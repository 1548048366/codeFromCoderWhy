var name = '小明'
var flag = true;
var sum = function(num1, num2){
  return num1 + num2;
}
if(flag){
  sum(20, 30)
}
// 导出方式一
export {
  flag
};
// 导出方式二： 
//export var name = 'xiaoming'
export var height = 1.88

export function mul(num1, num2) {
return num1 + num2;
}
export class person {
  run() {
    console.log('runing now')
  }
}

// 导出一个default 的东西
// 在开发中，这个东西只能有一个

// const address = '天安门'
// export default address

// 默认的不仅仅可以是变量， 同时还可以函数

export default function eat() {
  console.log('Am eating')
}