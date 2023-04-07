import { combineReducers } from "redux";
import { isAuthReducer } from './auth/authReducer'
import { userReducer } from './user/userReducer'

const reducers = combineReducers({
  authData: isAuthReducer,
  userReducer: userReducer
})

export default reducers;