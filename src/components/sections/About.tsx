import React, { lazy, Suspense } from 'react'
import clsx from 'clsx'
import useFadeInMounted from '@/hooks/useFadeInMounted'
import Preloader from '@/components/common/Preloader'

const Heading1 = lazy(() => import('@/components/common/reusable/headings/Heading1'))
const Heading2 = lazy(() => import('@/components/common/reusable/headings/Heading2'))
const Heading3 = lazy(() => import('@/components/common/reusable/headings/Heading3'))
const Badge = lazy(() => import('@/components/common/reusable/Badge'))
const HighlightText = lazy(() => import('@/components/common/reusable/HighlightText'))
const InlineLink = lazy(() => import('@/components/common/reusable/InlineLink'))
const Section = lazy(() => import('@/components/layout/Section'))
const ReactMarkdown = lazy(() => import('react-markdown'))

type AboutProps = {
  aboutContent: string
}

export default function AboutPage({ aboutContent }: AboutProps): React.JSX.Element {
  const { animationClass } = useFadeInMounted()

  return (
    <div className={clsx(animationClass)}>
      <Suspense fallback={<Preloader />}>
        <Section
          className='[&>*]:animate-fade-in md:px-0 [&_p]:text-muted-dark [&_p]:dark:text-muted'
          maxWidthClass='md:max-w-screen-md'
        >
          <ReactMarkdown
            components={{
              h1: Heading1,
              h2: Heading2,
              h3: Heading3,
              a: InlineLink,
              strong: HighlightText,
              ul: ({ children }): React.JSX.Element => (
                <ul className='mb-8 flex flex-wrap gap-2'>{children}</ul>
              ),
              li: ({ children }): React.JSX.Element => (
                <li>
                  <Badge>{children}</Badge>
                </li>
              ),
            }}
          >
            {aboutContent}
          </ReactMarkdown>
        </Section>
      </Suspense>
    </div>
  )
}

// This function runs at build time
export async function getStaticProps() {
  // Static import of the markdown file during build time
  const aboutContent = await import('@/_data/about.md')

  return {
    props: {
      aboutContent: aboutContent.default, // Extract the content from the .md file
    },
  }
}
