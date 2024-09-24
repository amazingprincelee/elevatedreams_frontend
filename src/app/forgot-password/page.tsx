import ChangePasswordForm from '@/components/shared/auth-component/change-password-form'
import AuthLayout from '@/components/shared/auth-component/layout'
import { FC } from 'react'

type Props = {}
const page: FC<Props> = ({}) => {
  return (
    <AuthLayout
      children={<ChangePasswordForm />}
      img={'/images/auth/changepwd.png'}
    />
  )
}
export default page
