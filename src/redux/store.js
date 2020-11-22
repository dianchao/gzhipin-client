/*
redux最核心的管理对象模块，将state、action与reducer联系在一起的对象
 */
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'  //redux异步中间件
import { composeWithDevTools } from 'redux-devtools-extension' //redux调试工具

import reducers from './reducers'

// 向外暴露store对象
export default createStore(reducers, composeWithDevTools(applyMiddleware(thunk))) //应用异步中间件