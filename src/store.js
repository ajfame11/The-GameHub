import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
//import createRootReducer from './rootReducer'
import thunk from 'redux-thunk'
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import {homeReducer} from './pages/home/HomeReducer'

export const history = createBrowserHistory()
const rootReducer = combineReducers({
    router: connectRouter(history),
    games: homeReducer,
    oone: 1
  })
  const middleware = [routerMiddleware(history), thunk]
  const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ || compose
export const store = createStore(rootReducer, enhancer(applyMiddleware(...middleware))
    ) 

//   const store = createStore(
//     rootReducer, // root reducer with router state
//     compose(
//       applyMiddleware(
//         routerMiddleware(history), // for dispatching history actions
        
//         thunk
//       ),
//       window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     )

//   )
//   return store

