import { yupResolver } from '@hookform/resolvers/yup'
import Image from 'next/image'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { Button } from '../button/button'

export const schema = yup.object({
  otp: yup
    .string()
    .required('OTP is required')
    .min(4, 'OTP must be 4 digits')
    .max(4, 'OTP must be 4 digits'),
})

const VerifyOtp = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: { otp: '' },
    resolver: yupResolver(schema),
  })

  const handleOtpSubmit = async (data: { otp: string }) => {
    // Handle OTP verification logic here
  }

  return (
    <div className="def-contain flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full grid grid-cols-1 md:grid-cols-[40%_60%]">
        {/* Left side - OTP Verification */}
        <div className="w-full md:px-9 lg:px-16">
          <h2 className="text-2xl font-semibold mb-6">Verify OTP</h2>
          <p className="text-sm text-gray-600 mb-4">
            Confirm the OTP sent to you
          </p>

          <form onSubmit={handleSubmit(handleOtpSubmit)} className="space-y-6">
            <div className="flex space-x-4 justify-center">
              {Array.from({ length: 4 }).map((_, idx) => (
                <Controller
                  key={idx}
                  name={`otp${idx}`}
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      maxLength={1}
                      className={`border p-4 text-xl font-semibold text-center w-14 h-14 rounded-lg ${
                        errors.otp ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="-"
                    />
                  )}
                />
              ))}
            </div>

            {errors.otp && (
              <p className="text-red-500 text-sm text-center">
                {errors.otp.message}
              </p>
            )}

            <Button className="w-full bg-red-600 text-white py-2" size={'lg'}>
              Verify OTP
            </Button>
          </form>

          <div className="text-center mt-4">
            <button className="text-sm text-red-600">Resend OTP</button>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="hidden md:block">
          <Image
            src="/images/auth/young-people2.png"
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

export default VerifyOtp
