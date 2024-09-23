'use client'
import InputField from '@/components/ui/form-fields/input-field'
import { yupResolver } from '@hookform/resolvers/yup'
import { strong } from 'framer-motion/client'
import { EyeIcon, LockKeyhole } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { MdEmail } from 'react-icons/md'
import * as yup from 'yup'
import { Button } from '../button/button'
import EyeSlashIcon from './icons/eye-slash-icon'

export const schema = yup.object({
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters'),
})

const ChangePassword = () => {
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

  const handlePasswordChange = async (data: object) => {}

  return (
    <div className="def-contain flex justify-center items-center">
      <div className="bg-white  rounded-lg overflow-hidden w-full grid grid-cols-1 md:grid-cols-[40%_60%]">
        {/* Left side - Reset Password form */}
        <div className="w-full md:px-9 lg:px-16">
          <h2 className="text-2xl font-semibold mb-4">Change Password</h2>
          <p className="text-sm text-gray-600 mb-6">
            Set a new password for your account
          </p>

          <form
            onSubmit={handleSubmit(handlePasswordChange)}
            className=" space-y-8 font-jakarta lg:w-full overflow-y-scroll scrollbar-hide  "
          >
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <InputField
                  name="password"
                  type={isVisible ? 'text' : 'password'}
                  placeholder="Pas*****"
                  errors={errors}
                  startContent={
                    <LockKeyhole className=" text-gray-600 size-8" />
                  }
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

            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <InputField
                  name="password"
                  type={isVisible ? 'text' : 'password'}
                  placeholder="Pas*****"
                  errors={errors}
                  startContent={
                    <LockKeyhole className=" text-gray-600 size-8" />
                  }
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

            <Button className="w-full bg-red-600 text-white py-2" size={'lg'}>
              Set new password
            </Button>
          </form>
        </div>

        {/* Right side - Image */}
        <div className="hidden md:block">
          <Image
            src="/images/auth/changepwd.png"
            alt="Person with laptop"
            width={500}
            height={500}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  )
}

export default ChangePassword
