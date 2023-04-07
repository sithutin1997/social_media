import React from "react"
import { useSelector } from "react-redux"
import {useState} from 'react'
import { Link } from "react-router-dom"

const Login = () => {

  /** This is Login Function */
  const handleLogin = (event) => {
    event.preventDefault()
    alert("This is login")
  }

/* -------------------------------- jsx code -------------------------------- */
  return (
    <form
      onSubmit={handleLogin}
      className="flex flex-col justify-center items-center bg-grey w-1/3 py-20"
    >
      <div className="">
        <h2>Login</h2>
      </div>
      <div>
        <label
          htmlFor="username"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Username
        </label>
        <input
          type="text"
          id="username"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="John"
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          className="border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
      <div>
        <p>
          Do you want to create new account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </form>
  )
}

export default Login
