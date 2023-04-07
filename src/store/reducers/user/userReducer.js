const initialData = {
  users: [],
}

export const userReducer = (state = initialData, action) => {
  switch (action.type) {
    case 'SIGN_UP':
      console.log(action)
      return {
          ...state,
          users: action.payload
        }
      
    default:
      return state
  }
}
