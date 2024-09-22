'use client'

import AuthTabs from '@/components/pages/auth/auth-tabs'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { FC } from 'react'

type Props = { children: React.ReactNode }
const Layout: FC<Props> = ({ children }) => {
  const pathname = usePathname()
  const isRegister = pathname === '/register'

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen overflow-hidden">
      <div className="def-contain mt-24 lg:mb-8 w-full h-full ">
        <Image
          src="/images/logo.png"
          width={116}
          height={52}
          alt="logo"
          className="my-10"
        />
        <AuthTabs pathname={pathname} />
        {children}
      </div>
      <Image
        src={isRegister ? '/images/auth/signup.png' : '/images/auth/login.png'} // Dynamic image based on isLogin state
        alt={isRegister ? 'sign up image' : 'login image'}
        width={350}
        height={350}
        className="hidden lg:flex w-full h-full object-cover "
      />
    </div>
  )
}
export default Layout
