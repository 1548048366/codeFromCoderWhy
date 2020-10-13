
//三个常用的高阶函数：filter/map/reduce
// filter: 返回值为Boolean值，
//true： 将值添加进函数内内部生成的数组之中
// false：不将值加入数组
const nums = [1,2,12,124,55,42,90,100,222]
//需求：1.将数组内部大于90的数字筛选出来
//      2.筛选出的数字乘两倍
//      3.将所有数字加起来

// 还有更加简洁的写法
let total = nums.filter(n => n > 90).map(n => n * 2).reduce((pre, n) => pre + n);
console.log(total);

// 现在使用一段来完成上述的需求
// let total = nums.filter(function(n){
//   return n > 90
// }).map(function(n){
//   return n * 2
// }).reduce(function(preValue, n){
//   return preValue + n;
// },0)
// console.log(total);


// 1. 使用filter的方法
// 格式： const 变量名 = 目标数组.filter(function(){
//    return Boolean
// })

// const new1Nums = nums.filter(function(n){
//   return n > 90;
// })
// new1Nums = [124,100,222]


// 2. map函数的使用
// 与filter很像，但是在将元素添加到新的数组里时，是不需要进行Boolean判断的
// 函数体内部我们可以对数组的元素进行系列复杂操作，最后返回它就行了。
// map函数的返回值会添加到新数组

// const new2Nums = new1Nums.map(function(n) {
//   return n * 2;
// })
// new2Nums = [248,200,444]


// 3. reduce()函数的使用---> 数组的汇总
// reduce()和前面两个函数的都不一样，它需要两个参数
// reduce(function(preValue,n){
//  return preValue;
// }, startValue)
// 比如：const finalOut = new2Nums.reduce(function(preValue// 不一定要用，但一定要定义下来 ,n){
//   return 100;
// },0)
//startValue = 0; preValue = 100; 由于我们的数组有三个数，所以我们会循环三次
//第一次: startValue: 0, n: 248
// 第二次: return: 100, n: 200 
// 第三次: return: 100, n: 444
//所以我们可以通过它的两个参数来计算它的汇总
// let total = new2Nums.reduce(function(preValue, n){
//   return preValue + n
// }, 0)
// console.log(total)


//1. 常用方法
// let new1Nums =[]
// total = 0;
// for(let i of nums){
//   if(i > 100){
//     new1Nums.push(i);
//   }
// }
// console.log(new1Nums)
// let new2Nums =[]
// for(let i of new1Nums){
//   new2Nums.push(i * 2)
// }
// console.log(new2Nums)
// for(let i of new2Nums){
//   total += i;
// }
// console.log(total);