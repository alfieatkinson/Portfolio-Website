import React from 'react'
import { lazy } from 'react'
import clsx from 'clsx'
import InlineLinkProps from '@/types/components/InlineLinkProps'

const SlidingInUnderline = lazy(() => import('@/components/common/reusable/SlidingInUnderline'))

export default function InlineLink({ href, children }: InlineLinkProps): React.JSX.Element {
  return (
    <a
      href={href}
      target='_blank'
      rel='noreferrer'
      className={clsx(
        'cursor-pointer',
        'font-semibold duration-300',
        'text-primary-lighter-dark hover:text-primary-dark',
        'dark:text-primary-light dark:hover:text-primary-lighter',
      )}
    >
      <SlidingInUnderline>{children}</SlidingInUnderline>
    </a>
  )
}
