import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import HomeReducer from './pages/home/HomeReducer'

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  games: HomeReducer
})

export default createRootReducer