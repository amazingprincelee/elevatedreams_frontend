import AuthLayout from '@/components/shared/auth-component/layout'
import OTPForm from '@/components/shared/auth-component/verify-otp-form'
import React from 'react'

const page = () => {
  return (
    <AuthLayout children={<OTPForm />} img={'/images/auth/young-people2.png'} />
  )
}

export default page
