import AuthLayout from '@/components/shared/auth-component/layout'
import ResetPasswordForm from '@/components/shared/auth-component/reset-password-form'
import React from 'react'

const page = () => {
  return (
    <AuthLayout
      children={<ResetPasswordForm />}
      img={'/images/auth/young-people.png'}
    />
  )
}

export default page
