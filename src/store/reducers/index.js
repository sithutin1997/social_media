import { combineReducers } from "redux";
import { isAuthReducer } from './auth/authReducer'

const reducers = combineReducers({
  authData: isAuthReducer
})

export default reducers;