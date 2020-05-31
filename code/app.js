// once 
// function once(fn){
//     let done = false
//     return function(){
//         if(!done){
//             done = true
//             fn.call(this, ...arguments)
//         }
//     }
// }

// let pay1 = once(function(money){
//     console.log(`支付${money}元`);
// })
// let pay2 = once(function(money){
//     console.log(`支付${money}元`);
// })
// pay1(5) // 执行
// pay1(4)
// pay1(1)
// pay2(10) // 执行
// pay2(8)
// pay2(7)


// 对Math.pow 第二个参书默认是2的封装

// const square = num => Math.pow(num, 2)

// console.log(square(3))ke
// console.log(square(6))


// 柯里化

// curry 参书是一个函数  假定参数函数有n个形参，当被curry后的函数调用的形参个数大于等于n，
// 则直接返回函数值,如果不是，则返回可接受剩余参数的函数

// function curry(fn){
//     return function _curry(...args){
//         if(args.length<fn.length){
//             return function(){
//                 return _curry(...args.concat(...arguments))
//             }
//         }else{
//             return fn(...args)
//         }
//     }
// }


// const sum = function(a,b,c){
//     return a+b+c
// }
// var currySum = curry(sum)
// console.log(currySum(1,2,3));
// console.log(currySum(1)(2,3));
// console.log(currySum(1)(1)(1))
// function test(a,b,c){
//     console.log(test.length)
//     return function fn2(){
//         console.log(fn2)
//     }
// }

// test()()

// {
//     // 返回数组中的最后一个值的大写

//     let reverse = (arr) => arr.reverse()
//     let first = (arr) => arr[0]
//     let toUpper = (str) => str.toUpperCase()

//     let _ = require('lodash')
//     let arr = ['a', 'b', 'c']
//     let arr2 = ['a', 'b', 'c']

//     // let fn = _.flowRight(toUpper, first, reverse)


//     flowRight = (...args) => {
//         // 反转参数
//         let _args = args.reverse()

//         return function fn(...args) {
//             if (_args.length === 1) {
//                 return _args[0](...args)
//             } else {
//                 let nowFn = _args.shift()
//                 return fn(nowFn(...args))
//             }
//         }
//     }

//     // 使用 reduce 
//     flowRight2 = (...args) => {
//         // 反转参数
//         let _args = args.reverse()

//         return function fn(...args) {
//             // // let initialFn = _args.shift()
//             // return _args.reduce((total, currentFn)=>{
//             //     return currentFn(total)
//             // }, _args.shift()(...args))
//             return _args.reduce((total, currentFn) => {
//                 return currentFn(total)
//             }, ...args)
//         }
//     }
//     // <!-- 如在flowRight 函数组合中 -->
//     function logTag(tag, value) {
//         console.log(tag, value)
//         return value
//     }
//     let _logTag = _.curry(logTag)
//     // let fn = flowRight(toUpper, first, reverse)
//     let fn2 = flowRight2(toUpper, first, _logTag('tag1'), reverse)
//     // console.log(fn(arr));

//     console.log(fn2(arr2))
// }



// var res = [4,5,6].reduce((total, current, index, arr)=>{
//     console.log(total, current, index, arr)
//     return total + current
// },1)
// console.log('res', res)

// function test(...t){
//     console.log(t)
// }

// test([1,2])

// lodash fp

// const fp = require('lodash/fp')
// // 特点
// // 1. 函数有限，数据最后
// // 2. 柯里化
// console.log(fp.map(fp.toUpper, ['a', 'b', 'c']))
// console.log(fp.map(fp.toUpper)(['a', 'b', 'c']))

const fp = require('lodash/fp')

const cars = [{
    name: 'car1',
    horsepower: 200,
    dollar_value: 100,
    in_store: true
}, {
    name: 'car2',
    horsepower: 300,
    dollar_value: 50,
    in_store: false
}]

// let isLastInStock = fp.flowRight(fp.curry(fp.prop('in_store')),fp.last)

// let firstCarName = fp.flowRight(fp.curry(fp.prop('name')),fp.first)
// console.log(isLastInStock(cars), firstCarName(cars))

// let _average = (xs)=>fp.reduce(fp.add, 0, xs)/xs.length

// let averageDollarValue = fp.flowRight(_average, fp.curry(fp.map(fp.curry(fp.prop('dollar_value')))))
// console.log(averageDollarValue(cars))

// 拆分  转小写  拼接

// let names = ["Hello World", "Tom Jack"]

let tag = (tag, value) => {
    console.log(tag, value)
    return value
}
// let _underScore = fp.replace(/\W+/g, '_')

// let sanitizeNames = fp.flowRight(fp.curry(fp.map(_underScore)), fp.curry(fp.map(fp.toLower)))

// sanitizeNames = fp.flowRight(fp.curry(fp.map(fp.flowRight(_underScore, fp.toLower))))
// console.log(sanitizeNames(names))

// support.js


const { Maybe, Container } = require('./support.js')

// console.log(Maybe, Container)

// let maybe = Maybe.of([5,6,1])

// let ex1 = maybe.map(fp.curry(fp.map(fp.curry(fp.add(3)))))
// console.log(ex1)

// let xs = Container.of(['do', 'ray', 'me'])
// let ex2 = xs.map(fp.first)
// console.log(ex2._value)

// let safeProp = fp.curry(function(x,o){
//     return Maybe.of(o[x])
// })

// let user = {id: 2, name: 'Albert'}

// let ex3 = user =>{
//     return safeProp('name')(user).map(fp.first)
// }

// console.log(ex3(user))


let ex4 = function(n){
    return Maybe.of(n).map(parseInt)['_value']
}

console.log(ex4(null))