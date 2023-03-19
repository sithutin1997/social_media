import { LOGGED_IN, LOGGED_OUT } from "../../actions/auth"

const initialData = {
  isLoggedIn: false,
}

export const isAuthReducer = (state = initialData, action) => {
  switch (action.type) {
    case LOGGED_IN:
      return (state.isLoggedIn = true)
    case LOGGED_OUT:
      return (state.isLoggedIn = false)
    default:
      return state
  }
}
