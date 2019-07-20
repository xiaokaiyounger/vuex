import axios from 'axios';
import * as types from './types'
let actions = {
  // 类型:函数   用函数处理这类型的请求
  // jia:function(){},
  // jia(){},
  [types.INCREMENT]:({state,commit},payload)=>{
    // state == 仓库  财务  
    // commit == 函数  和mutations通讯
    //业务逻辑..........
    // commit('类型',负载)
    commit(types.INCREMENT,payload)
  },
  [types.DECREMENT]:({commit,state},payload)=>commit(types.DECREMENT,payload),
  odd:({commit,state},payload)=>{
    if(state.count % 2 === 0){
      commit(types.INCREMENT,payload)
    }
  },
  /* yibu:({commit,state},payload)=>{
    //异步的动作了
    axios({
      url:'/data/user.json'
    }).then(
      res=>commit(types.INCREMENT,res.data.count)
    )
  } */

  yibu: async ({commit,state},payload)=>{
    let res = await axios({
      url:'/data/user.json'
    })

    commit(types.INCREMENT,res.data.count)

  }
}

export default actions;