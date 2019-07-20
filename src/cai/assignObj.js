

//1. assign
// let obj1={a:1,b:2}
// let obj2={c:3}
// Object.assign(合并后的对象,对象1,对象2,对象n)  同步返回合并后的对象   是浅合并
/* let obj3 = Object.assign({},obj1,obj2)  
obj3.d=4;
console.log('obj3',obj3)
console.log('obj2',obj2)
console.log('obj1',obj1) */

/* let obj1={a:1,b:{bb:22}}
let obj2={c:3,b:{aa:11}}
let obj3 = Object.assign({},obj1,obj2)  
console.log('obj3',obj3) */

// 2   扩展操作符   ...    是浅合并
/* let obj1={a:1,b:{bb:22}}
let obj2={c:3,b:{aa:11}}
// let obj1={a:1,b:2}
// let obj2={c:3}
let obj3={...obj1 , ...obj2}

console.log('obj3',obj3) */

