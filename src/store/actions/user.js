import axios from "axios"

const url = process.env.REACT_APP_API_URL
export const createUser = (user) => {
   return async (dispatch) => {
      console.log(url)
      dispatch({type: "SIGN_UP"})
      await axios.post(`${url}/users`, user).then(response => {
         console.log(response)
         dispatch({
            type: 'SIGN_UP',
            payload: response.data
         })
      }).catch(error => {
         console.log(error.message)
         dispatch({
            type: 'SIGN_UP',
            payload: error.message
         })
      })
   }
}
