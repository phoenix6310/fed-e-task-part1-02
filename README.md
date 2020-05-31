1. 
  - 当一个引用类型的数据被赋值给一个变量时，则这个数据的引用数从0变为1，如果还有其他变量引用此数据，会依次累加。当引用这个值的变量又去引用其他变量时，引用数-1。
  - 优点：效率高 缺点：无法解决循环引用数据的清除，造成内存泄漏
2. 标记阶段: 遍历所有对象, 将活动对象都打上标记
清除阶段: 遍历堆, 将没有标记的对象释放掉
3. 将新生代空间对半分为两个空间（对象区域与空闲区域）。当对象区域快被写满时，执行一次垃圾清理操作。对对象区域中的垃圾进行标记，将存活数据复制到空闲区域，完成活动列表与空闲列表的翻转，循环使用
4. 降低老生代垃圾回收造成的卡顿时使用。将标记过程分为一个个的子标记过程，让垃圾回收与js执行交替进行，直到标记阶段完成

5. 
  ```
  let isLastInStock = fp.flowRight(fp.curry(fp.prop('in_store')),fp.last)
  ```
  ```
  let firstCarName = fp.flowRight(fp.curry(fp.prop('name')),fp.first)
  ```
  ```
  fp.flowRight(_average, fp.curry(fp.map(fp.curry(fp.prop('dollar_value')))))
  ```
  ```
  let sanitizeNames = fp.flowRight(fp.curry(fp.map(fp.flowRight(_underScore, fp.toLower))))
  ```
6. 
```
let ex1 = maybe.map(fp.curry(fp.map(fp.curry(fp.add(3)))))
```
```
let ex2 = xs.map(fp.first)
```
```
let ex3 = user =>{
    return safeProp('name')(user).map(fp.first)
}
```
```
let ex4 = function(n){
    return Maybe.of(n).map(parseInt)['_value']
}
```