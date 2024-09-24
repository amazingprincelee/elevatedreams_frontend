'use client'
import { yupResolver } from '@hookform/resolvers/yup'
import Image from 'next/image'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { Button } from '../button/button'

export const schema = yup.object({
  otp0: yup
    .string()
    .required('OTP digit is required')
    .length(1, 'Must be 1 digit'),
  otp1: yup
    .string()
    .required('OTP digit is required')
    .length(1, 'Must be 1 digit'),
  otp2: yup
    .string()
    .required('OTP digit is required')
    .length(1, 'Must be 1 digit'),
  otp3: yup
    .string()
    .required('OTP digit is required')
    .length(1, 'Must be 1 digit'),
})

const VerifyOtp = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: { otp0: '', otp1: '', otp2: '', otp3: '' },
    resolver: yupResolver(schema),
  })

  const handleOtpSubmit = async (data: {
    otp0: string
    otp1: string
    otp2: string
    otp3: string
  }) => {
    const otp = `${data.otp0}${data.otp1}${data.otp2}${data.otp3}` // Combine the 4 digits into a single OTP
    console.log('Submitted OTP:', otp)
    // Handle OTP verification logic here
  }

  return (
    <div className="flex justify-center items-center">
      <div className="bg-white rounded-lg overflow-hidden w-full grid grid-cols-1 md:grid-cols-[40%_60%]">
        {/* Left side - OTP Verification */}
        <div className="w-full md:px-9 md:pt-40 lg:px-16">
          <h2 className="text-2xl font-semibold mb-6">Verify OTP</h2>
          <p className="text-sm text-gray-600 mb-4">
            Confirm the OTP sent to you
          </p>

          <form onSubmit={handleSubmit(handleOtpSubmit)} className="space-y-6">
            <div className="flex space-x-4 justify-center">
              {Array.from({ length: 4 }).map((_, idx) => (
                <Controller
                  key={idx}
                  name="otp0"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      maxLength={1}
                      className={`border p-4 text-xl font-semibold text-center w-14 h-14 rounded-lg ${
                        errors.otp0 ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="-"
                    />
                  )}
                />
              ))}
            </div>

            {errors.otp0 && (
              <p className="text-red-500 text-sm text-center">
                {errors.otp0.message}
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
