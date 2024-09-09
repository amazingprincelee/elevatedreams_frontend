import { cn } from '@/lib/util'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { FC } from 'react'
import { buttonVariants } from './button'

type Props = { url: string; label: string; isIcon?: boolean }
const LinkButton: FC<Props> = ({ url, label, isIcon }) => {
  return (
    <Link
      href={url}
      className={cn(
        buttonVariants({ className: 'flex items-center gap-3', size: 'lg' }),
      )}
    >
      <span>{label}</span>
      {isIcon && (
        <div className="p-[3px] bg-white rounded-full">
          <ArrowRight className="h-4 w-4 text-primary" />
        </div>
      )}
    </Link>
  )
}
export default LinkButton
