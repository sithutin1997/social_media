import React from 'react'
import UnAuthNav from '../components/nav/UnAuthNav'
const UnAuthLayout = ({children}) => {
  return (
    <>
      <UnAuthNav />
      <main className="flex h-[90vh]">{children}</main>
    </>
  )
}

export default UnAuthLayout