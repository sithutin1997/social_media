import React, {useState} from "react"
import { useDispatch } from "react-redux";
import { createUser } from '../../store/actions/user'
import { Link } from "react-router-dom";
const SignUp = () => {

  const dispatch = useDispatch();

  const [formData,setFormData] = useState({
    name : "",
    email : "",
    username : "",
    password : ""
  })
  const handleInputChange = (event) => {
    event.preventDefault();
    setFormData({
      ...formData,
      [event.target.id]: event.target.value
    })
  }

  /** This is Sign Up Function */
  const handleSignUp = (event) => {
    event.preventDefault();
    dispatch(createUser(formData));
    setFormData({
      name : "",
      email : "",
      username : "",
      password : ""
    })
  }
 /* -------------------------------- jsx code -------------------------------- */
  return (
    <form onSubmit={handleSignUp} className="flex flex-col justify-center items-center bg-grey w-1/3 py-20">
      <div className="">
        <h2>Sign Up</h2>
      </div>
      <div>
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={handleInputChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Email
        </label>
        <input
          type="text"
          id="email"
          value={formData.email}
          onChange={handleInputChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="John@gmail.com"
        />
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
          value={formData.username}
          onChange={handleInputChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
          value={formData.password}
          onChange={handleInputChange}
          className="border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </div>
      <div>
        <button type="submit">Sign Up</button>
      </div>
      <div>
        <p>
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
    </form>
  )
}

export default SignUp
