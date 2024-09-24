'use client'
import InputField from '@/components/ui/form-fields/input-field'
import { yupResolver } from '@hookform/resolvers/yup'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { MdEmail } from 'react-icons/md'
import * as yup from 'yup'
import { Button } from '../button/button'

export const schema = yup.object({
  email: yup.string().required('Email is required').email('Invalid email'),
})

const ResetPassword = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: { email: '' },
    resolver: yupResolver(schema),
  })

  const handleReset = async (data: { email: string }) => {
    // Handle reset logic here
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="h-screen bg-white rounded-lg overflow-hidden w-full grid grid-cols-1 md:grid-cols-[50%_50%]">
        {/* Left side - Reset Password form */}
        <div className="w-full h-full md:pt-40 md:px-9 lg:px-36">
          <p className="self-start mb-8 flex gap-2 items-center">
            <ArrowLeft className="size-5" />
            Go back to <span className="text-primary">Blog</span>
          </p>
          <Link href="/" className="flex justify-center">
            <Image
              src={'/images/logo.png'}
              alt={'blog'}
              width={1200}
              height={900}
              className=" w-20 object-cover mb-10 "
            />
          </Link>
          <h2 className="text-2xl font-semibold mb-4">Reset Password</h2>
          <p className="text-sm text-gray-600 mb-6">
            We will send a <strong>4 digit code</strong> to your email address.
          </p>

          <form onSubmit={handleSubmit(handleReset)} className="space-y-6">
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <InputField
                  name="email"
                  placeholder="Email"
                  value={field.value}
                  errors={errors}
                  field={field}
                  className="w-full"
                  startContent={
                    <MdEmail className="text-xl text-gray-400 pointer-events-none" />
                  }
                />
              )}
            />

            <Button className="w-full bg-red-600 text-white  py-2" size={'lg'}>
              <p className="p-3">Send reset email</p>
            </Button>
          </form>

          <div className="text-center mt-4">
            <Link href="/login" className="text-sm text-red-600">
              Remember password?
            </Link>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="w-full h-full hidden md:block">
          <Image
            src="/images/auth/young-people.png"
            alt="Person with laptop"
            width={3360}
            height={3016}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  )
}

export default ResetPassword
