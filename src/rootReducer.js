import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import HomeReducer from './pages/home/HomeReducer'

export default (history) => combineReducers({
  router: connectRouter(history),
  games: HomeReducer
})
