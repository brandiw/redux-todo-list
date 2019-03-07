import { combineReducers } from 'redux'
import todos from './todoReducer'

const rootReducer = combineReducers({
  todos // shorthand for cart: cart
})

export default rootReducer;
