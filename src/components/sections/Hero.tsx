import React from 'react'
import { lazy } from 'react'
import clsx from 'clsx'
import useFadeInMounted from '@/hooks/useFadeInMounted'

const Section = lazy(() => import('@/components/layout/Section'))
const SlidingInUnderline = lazy(() => import('@/components/common/reusable/SlidingInUnderline'))
const HighlightText = lazy(() => import('@/components/common/reusable/HighlightText'))
const SkillsTypewriter = lazy(() => import('@/components/common/SkillsTypewriter'))
const SocialMediaLinks = lazy(() => import('@/components/common/SocialMediaLinks'))
const PrimaryButton = lazy(() => import('@/components/common/reusable/buttons/PrimaryButton'))
const ArrowDownSLineIcon = lazy(() => import('remixicon-react/ArrowDownSLineIcon'))

export default function Hero(): React.JSX.Element {
  const { animationClass } = useFadeInMounted()
  const scrollToProjects = (): void => window.location.assign('#projects')

  return (
    <Section
      className={clsx(animationClass, 'flex h-[88vh] min-h-[480px] flex-col justify-between')}
    >
      <div className='flex h-3/4 flex-col justify-center space-y-4 sm:space-y-6'>
        <h1 className={clsx('animate-fade-in', 'text-xl sm:text-2xl lg:text-3xl')}>
          Hi! I'm{' '}
          <SlidingInUnderline type='secondary' height='lg'>
            Alfie Atkinson {':)'}
          </SlidingInUnderline>
        </h1>
        <h2
          className={clsx(
            'animate-fade-in !delay-200',
            'text-3xl sm:text-5xl lg:text-6xl',
            'break-words font-extrabold tracking-tight',
          )}
        >
          Turning ideas into <HighlightText>scalable web apps</HighlightText> with code, caffeine,
          and <HighlightText>continuous learning</HighlightText>.
        </h2>
        <p
          className={clsx(
            'animate-fade-in !delay-300',
            'text-muted-dark dark:text-muted',
            'sm:text-lg lg:text-xl',
            'pb-0',
          )}
        >
          <SkillsTypewriter />
        </p>
        <SocialMediaLinks className={clsx('animate-fade-in !delay-500', 'mt-6')} />
      </div>

      <PrimaryButton
        className='mx-auto animate-bounce'
        icon={<ArrowDownSLineIcon />}
        onClick={scrollToProjects}
      >
        Featured projects
      </PrimaryButton>
    </Section>
  )
}
