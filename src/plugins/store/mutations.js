import {INCREMENT,DECREMENT} from './types'; //对于批量导出的的属性, 解构输入
// import * as types from './types'; //对于批量导出的一个 输入 到一个对象里面
// console.log(types)


/* let A='a';

var a=12;
alert(window.a)
alert(window['a'])
alert(window[A])

var obj={a:1}
obj.a
obj['a']
obj[A] */



let mutations = {
  [INCREMENT]:(state,payload)=>{
    console.log('mutations increment')
    //没有业务逻辑
    //直接做突变
    state.count += payload
  },
  [DECREMENT]:(state,payload)=>state.count-=payload
}

export default mutations;