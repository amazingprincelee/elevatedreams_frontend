import InputField from '@/components/ui/form-fields/input-field'
import { yupResolver } from '@hookform/resolvers/yup'
import { LockKeyhole } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { MdEmail } from 'react-icons/md'
import * as yup from 'yup'
import { Button } from '../button/button'
import EyeIcon from './icons/eye-icon'
import EyeSlashIcon from './icons/eye-slash-icon'

export const schema = yup.object({
  email: yup.string().required('Email is required'),
  password: yup.string().required('Password is required'),
})

const Login = () => {
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

  const handleLogin = async (data: { email: string; password: string }) => {}

  return (
    <div className="flex mt-10 justify-center max-w-screen-sm bg-white">
      <div className="w-full  space-y-6 bg-white rounded-lg">
        <form
          onSubmit={handleSubmit(handleLogin)}
          className="w-full space-y-6 font-jakarta bg-white"
        >
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
            Login
          </Button>
        </form>
        <div>
          <Link href="/forgot-password" className="text-sm text-red-600">
            Forgot Password?
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login
