import React from 'react'
import UnAuthLayout from '../layouts/UnAuthLayout'
import Login from '../components/auth/Login'

const LoginPage = () => {

  return (
    <div>
     <UnAuthLayout>
      <div className="flex items-center w-full justify-center">
        <Login />
      </div>
     </UnAuthLayout>
    </div>
  )
}

export default LoginPage