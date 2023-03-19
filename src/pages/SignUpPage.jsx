import React from 'react'
import UnAuthLayout from '../layouts/UnAuthLayout'
import SignUp from '../components/auth/Signup'

const SignUpPage = () => {

  return (
    <div>
     <UnAuthLayout>
      <div className="flex items-center w-full justify-center">
        <SignUp />
      </div>
     </UnAuthLayout>
    </div>
  )
}

export default SignUpPage