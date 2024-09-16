import { FC } from 'react'

type Props = { text: string; className?: string }
export const Header: FC<Props> = ({ text }) => {
  return <h1 className="text-3xl lg:text-4xl font-bold">{text}</h1>
}

export const SubHeader: FC<Props> = ({ text, className }) => {
  return (
    <p
      className={`${className} text-sm font-light text-slate-500 leading-relaxed `}
    >
      {text}
    </p>
  )
}

export const BlackSubHeader: FC<Props> = ({ text, className }) => {
  return (
    <p
      className={`${className} text-sm font-light text-black leading-relaxed `}
    >
      {text}
    </p>
  )
}
