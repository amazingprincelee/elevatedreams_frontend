import Link from 'next/link'
import { useState } from 'react'
import {
  MdEmail,
  MdLock,
  MdPeople,
  MdPerson,
  MdPhone,
  MdWork,
} from 'react-icons/md'
import LinkButton from '../button/link-button'

const SignUp = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    occupation: '',
    nextOfKinName: '',
    nextOfKinPhone: '',
    password: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle sign up logic
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full  md:max-w-md-none  bg-white rounded-lg">
        <form
          onSubmit={handleSignUp}
          className=" space-y-8 font-jakarta lg:w-full bg-white"
        >
          <div className="relative flex  gap-3 items-center">
            <label htmlFor="email" className="sr-only">
              First Name
            </label>
            <MdPerson className="absolute left-3 size-8  text-gray-400 " />
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              autoComplete="email"
              required
              className="w-full md:w-full text-2xl  text-gray-400 font-thin pl-14 pr-5 py-4 border border-gray-300 hover:border-red-500 rounded-2xl focus:outline-none focus:border-red-500"
              value={form.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div className="relative flex  gap-3 items-center">
            <label htmlFor="email" className="sr-only">
              Last Name
            </label>
            <MdPerson className="absolute left-3 size-8  text-gray-400 " />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
              className="w-full md:w-full text-2xl  text-gray-400 font-thin pl-14 pr-5 py-4 border border-gray-300 hover:border-red-500 rounded-2xl focus:outline-none focus:border-red-500"
              value={form.lastName}
              onChange={handleInputChange}
            />
          </div>
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
              className="w-full md:w-full text-2xl  text-gray-400 font-thin pl-14 pr-5 py-4 border border-gray-300 hover:border-red-500 rounded-2xl focus:outline-none focus:border-red-500"
              value={form.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="relative flex  gap-3 items-center">
            <label htmlFor="email" className="sr-only">
              Phone Number
            </label>
            <MdPhone className="absolute left-3 size-8  text-gray-400 " />
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              required
              className="w-full md:w-full text-2xl  text-gray-400 font-thin pl-14 pr-5 py-4 border border-gray-300 hover:border-red-500 rounded-2xl focus:outline-none focus:border-red-500"
              value={form.phoneNumber}
              onChange={handleInputChange}
            />
          </div>
          <div className="relative flex  gap-3 items-center">
            <label htmlFor="email" className="sr-only">
              Occupation
            </label>
            <MdWork className="absolute left-3 size-8  text-gray-400 " />
            <input
              type="text"
              name="occupation"
              placeholder="Occupation"
              required
              className="w-full md:w-full text-2xl  text-gray-400 font-thin pl-14 pr-5 py-4 border border-gray-300 hover:border-red-500 rounded-2xl focus:outline-none focus:border-red-500"
              value={form.occupation}
              onChange={handleInputChange}
            />
          </div>
          <div className="relative flex  gap-3 items-center">
            <label htmlFor="email" className="sr-only">
              Next Of Kin Name
            </label>
            <MdPeople className="absolute left-3 size-8  text-gray-400 " />
            <input
              type="text"
              name="nextOfKinName"
              placeholder="Next of Kin Name"
              required
              className="w-full md:w-full text-2xl  text-gray-400 font-thin pl-14 pr-5 py-4 border border-gray-300 hover:border-red-500 rounded-2xl focus:outline-none focus:border-red-500"
              value={form.nextOfKinName}
              onChange={handleInputChange}
            />
          </div>
          <div className="relative flex  gap-3 items-center">
            <label htmlFor="email" className="sr-only">
              Next of Kin Phone Number
            </label>
            <MdPhone className="absolute left-3 size-8  text-gray-400 " />
            <input
              type="text"
              name="nextOfKinPhone"
              placeholder="Next of Kin Phone Number"
              required
              className="w-full md:w-full text-2xl  text-gray-400 font-thin pl-14 pr-5 py-4 border border-gray-300 hover:border-red-500 rounded-2xl focus:outline-none focus:border-red-500"
              value={form.nextOfKinPhone}
              onChange={handleInputChange}
            />
          </div>
          <div className="relative flex  gap-3 items-center">
            <label htmlFor="email" className="sr-only">
              Password
            </label>
            <MdLock className="absolute left-3 size-8  text-gray-400 " />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              className="w-full md:w-full text-2xl  text-gray-400 font-thin pl-14 pr-5 py-4 border border-gray-300 hover:border-red-500 rounded-2xl focus:outline-none focus:border-red-500"
              value={form.password}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex justify-center">
            <LinkButton url={''} label={'Sign Up'} className="w-full" />
          </div>
        </form>
        <div className="flex gap-1 bg-red-100 text-center  font-jakarta text-gray-500 mt-4 px-6 py-4">
          <input type="checkbox" className="size-10 border !border-red-400" />

          <div>
            By Signing Up, you agree to our{' '}
            <Link href="/terms" className="text-red-600 underline">
              Terms & Conditions
            </Link>{' '}
            and{' '}
            <Link href="/privacy-policy" className="text-red-600 underline">
              Privacy Policy
            </Link>
            .
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
