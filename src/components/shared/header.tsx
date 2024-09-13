import { FC } from 'react'

type Props = { text: string }
export const Header: FC<Props> = ({ text }) => {
  return <h1 className="text-2xl font-bold md:text-4xl ">{text}</h1>
}

export const SubHeader: FC<Props> = ({ text }) => {
  return <h1 className="text-gray-600 font-jakarta">{text}</h1>
}
