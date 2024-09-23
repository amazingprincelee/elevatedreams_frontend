import InputField from '@/components/ui/form-fields/input-field'
import { yupResolver } from '@hookform/resolvers/yup'
import { LockKeyhole } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import {
  MdEmail,
  MdLock,
  MdPeople,
  MdPerson,
  MdPhone,
  MdWork,
} from 'react-icons/md'
import * as yup from 'yup'
import { Button } from '../button/button'
import EyeIcon from './icons/eye-icon'
import EyeSlashIcon from './icons/eye-slash-icon'

export const schema = yup.object({
  email: yup.string().required('Email is required'),
  password: yup.string().required('Password is required'),
  firstName: yup.string().required('First Name is required'),
  lastName: yup.string().required('Last Name is required'),
  phoneNumber: yup.string().required('Phone Number is required'),
  occupation: yup.string().notRequired(),
  nextOfKinName: yup.string().notRequired(),
  nextOfKinPhone: yup.string().notRequired(),
})

const SignUp = () => {
  const [isVisible, setIsVisible] = React.useState(false)

  const toggleVisibility = () => setIsVisible(!isVisible)

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {},

    resolver: yupResolver(schema),
  })

  const handleSignUp = async (data: object) => {}
  return (
    <div className="flex flex-col lg:px-2 max-w-screen-sm mt-5 lg:mt-10 h-[40%] lg:h-[45%] max-h-max overflow-y-auto 2xl:h-[60%] md:h-[65%]">
      <form
        onSubmit={handleSubmit(handleSignUp)}
        className=" space-y-8 font-jakarta w-full 2xl:overflow-y-scroll scrollbar-hide h-fit flex flex-col "
      >
        <Controller
          name="firstName"
          control={control}
          render={({ field }) => (
            <InputField
              name="firstName"
              placeholder="Enter First Name"
              value={field.value}
              errors={errors}
              field={field}
              startContent={
                <MdPerson className="size-8  text-gray-400 pointer-events-none " />
              }
            />
          )}
        />
        <Controller
          name="lastName"
          control={control}
          render={({ field }) => (
            <InputField
              name="lastName"
              placeholder="Enter Last Name"
              value={field.value}
              errors={errors}
              field={field}
              startContent={
                <MdPerson className="size-8  text-gray-400 pointer-events-none " />
              }
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <InputField
              name="email"
              placeholder="Enter Email"
              value={field.value}
              errors={errors}
              field={field}
              startContent={
                <MdEmail className="size-8  text-gray-400 pointer-events-none" />
              }
            />
          )}
        />
        <Controller
          name="phoneNumber"
          control={control}
          render={({ field }) => (
            <InputField
              name="phoneNumber"
              placeholder="Enter Phone Number"
              value={field.value}
              errors={errors}
              field={field}
              startContent={
                <MdPhone className="size-8  text-gray-400 pointer-events-none" />
              }
            />
          )}
        />
        <Controller
          name="occupation"
          control={control}
          render={({ field }) => (
            <InputField
              name="occupation"
              placeholder="Enter Occupation"
              value={field.value}
              errors={errors}
              field={field}
              startContent={
                <MdWork className="size-8  text-gray-400 pointer-events-none" />
              }
            />
          )}
        />
        <Controller
          name="nextOfKinName"
          control={control}
          render={({ field }) => (
            <InputField
              name="nextOfKinName"
              placeholder="Enter Next Of Kin Name"
              value={field.value}
              errors={errors}
              field={field}
              startContent={
                <MdPeople className="size-8  text-gray-400 pointer-events-none" />
              }
            />
          )}
        />
        <Controller
          name="nextOfKinPhone"
          control={control}
          render={({ field }) => (
            <InputField
              name="nextOfKinPhone"
              placeholder="Enter Next Of Kin Phone Number"
              value={field.value}
              errors={errors}
              field={field}
              startContent={
                <MdPhone className="size-8  text-gray-400 pointer-events-none" />
              }
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <InputField
              name="password"
              type={isVisible ? 'text' : 'password'}
              placeholder="Pas*****"
              errors={errors}
              startContent={<LockKeyhole className=" text-gray-600 size-8" />}
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <EyeSlashIcon className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <EyeIcon className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              field={{ ...field }}
            />
          )}
        />

        <Button className="w-full" size={'lg'}>
          {' '}
          Sign Up
        </Button>
      </form>
      <div className="flex gap-1 bg-red-100 text-center  font-jakarta text-gray-500 mt-4 px-6 py-4">
        <input type="checkbox" className="size-10 border !border-red-400" />

        <div>
          By Signing Up, you agree to our{' '}
          <Link href="/#" className="text-red-600 underline">
            Terms & Conditions
          </Link>{' '}
          and{' '}
          <Link href="/#" className="text-red-600 underline">
            Privacy Policy
          </Link>
          .
        </div>
      </div>
    </div>
  )
}

export default SignUp
