import Link from 'next/link'
import { useState } from 'react'
import { MdEmail, MdLock } from 'react-icons/md'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <div className="flex justify-center min-h-screen bg-white">
      <div className="w-full  space-y-6 bg-white rounded-lg">
        <form
          onSubmit={handleLogin}
          className="w-full space-y-4 font-jakarta bg-white"
        >
          <div className="relative flex  gap-3 items-center">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <MdEmail className="absolute left-3 size-8  text-gray-400 " />
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="Email"
              className="w-full md:w-full text-2xl text-gray-400 pl-14 pr-3 py-4 border border-gray-300 hover:border-blue-500 rounded-2xl focus:outline-none focus:border-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative flex items-center">
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <MdLock className="absolute size-8 text-gray-400 left-3 " />
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              placeholder="Password"
              className="w-full md:w-full text-xl  text-gray-400 font-thin px-3 pl-14 py-4 border border-gray-300 hover:border-blue-500 rounded-2xl focus:outline-none focus:border-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full py-4 text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none"
          >
            Sign Up
          </button>
        </form>
        <div>
          <Link href="/forgot-password" className="text-lg text-red-600">
            Forgot Password?
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login
