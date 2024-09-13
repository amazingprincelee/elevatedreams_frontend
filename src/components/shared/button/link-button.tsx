import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { FC } from 'react'
import { buttonVariants } from './button'

type Props = {
  url: string
  label: string
  isIcon?: boolean
  className?: string
  iconClassName?: string
}
const LinkButton: FC<Props> = ({
  url,
  label,
  isIcon,
  className,
  iconClassName,
}) => {
  return (
    <Link
      href={url}
      className={cn(
        buttonVariants({
          className: `flex items-center gap-3 w-fit ${className}`,
          size: 'lg',
        }),
      )}
    >
      <span>{label}</span>
      {isIcon && (
        <div className="p-[3px] bg-white rounded-full">
          <ArrowRight className={`h-4 w-4 text-primary ${iconClassName}`} />
        </div>
      )}
    </Link>
  )
}
export default LinkButton
