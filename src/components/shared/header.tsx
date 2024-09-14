import { FC } from 'react'

type Props = { text: string }
export const Header: FC<Props> = ({ text }) => {
  return <h1 className="text-3xl lg:text-4xl font-bold">{text}</h1>
}

export const SubHeader: FC<Props> = ({ text }) => {
  return <h1 className="text-gray-600 font-jakarta">{text}</h1>
}
