export const LOGGED_IN = 'LOGGED_IN'
export const LOGGED_OUT = 'LOGGED_OUT'

export const login = () => (
   {
    type: LOGGED_IN
   }
)

export const logout = () => (
   {
      type: LOGGED_OUT
   }
)
