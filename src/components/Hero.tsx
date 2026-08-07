import { type ReactNode } from 'react'
import { colors, gradients, shadows } from '@/tokens/design-system'
import Button from './Button'
import { ArrowRight } from './Icons'

type Props = {
  title: string
  subtitle: string
  description: string
  ctaPrimary: string
  ctaSecondary: string
  imageSrc: string
  imageAlt: string
  stats: Array<{ value: string; label: string }>
  badge: string
  badgeLabel: string
  badgeIcon?: ReactNode
}

export default function Hero({
  title,
  subtitle,
  description,
  ctaPrimary,
  ctaSecondary,
  imageSrc,
  imageAlt,
  stats,
  badge,
  badgeLabel,
  badgeIcon,
}: Props) {
  return (
    <section
      id="hero"
      className="grid grid-cols-1 md:grid-cols-2 min-h-[90svh] md:min-h-screen overflow-hidden"
      style={{ paddingTop: '80px' }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 'clamp(32px, 6vw, 80px) clamp(20px, 5vw, 80px)',
          backgroundColor: colors.cream[50],
        }}
        className="px-4 py-10 sm:px-6 sm:py-14 lg:px-8 xl:px-12"
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <div style={{ width: '32px', height: '1px', backgroundColor: colors.rose }} />
          <span
            style={{
              fontSize: '0.6875rem',
              fontWeight: 500,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: colors.rose,
            }}
          >
            {badge}
          </span>
        </div>

        <h1
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl"
          style={{
            fontFamily: "'Fraunces', Georgia, serif",
            fontWeight: 600,
            lineHeight: 1.05,
            color: colors.chocolate,
            margin: '0 0 24px',
          }}
        >
          {title}
        </h1>

        <p
          className="text-base sm:text-lg max-w-[32rem]"
          style={{
            fontWeight: 300,
            lineHeight: 1.7,
            color: colors.mocha,
            margin: '0 0 40px',
          }}
        >
          {description}
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap" style={{ gap: '16px' }}>
          <Button as="a" href="#menu" variant="primary" size="lg">
            {ctaPrimary}
          </Button>
          <Button as="a" href="#story" variant="secondary" size="lg" icon={null}>
            {ctaSecondary}
          </Button>
        </div>

        <div
          className="mt-10 flex flex-wrap gap-8 sm:mt-14 sm:gap-10 lg:gap-12"
          style={{
            paddingTop: '32px',
            borderTop: `1px solid ${colors.cream[200]}`,
          }}
        >
          {stats.map((stat) => (
            <div key={stat.label} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontSize: '1.875rem',
                  fontWeight: 600,
                  color: colors.chocolate,
                }}
              >
                {stat.value}
              </span>
              <span style={{ fontSize: '0.75rem', fontWeight: 400, color: colors.cream[500] }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative min-h-[320px] sm:min-h-[420px] lg:min-h-[560px]" style={{ backgroundColor: colors.cream[200] }}>
        <img
          src={imageSrc}
          alt={imageAlt}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: gradients.heroVignette }} />

        <div
          className="left-4 right-4 bottom-4 sm:left-auto sm:right-6 sm:bottom-6"
          style={{
            position: 'absolute',
            padding: '16px 20px',
            borderRadius: '16px',
            backgroundColor: 'rgba(253,249,243,0.92)',
            backdropFilter: 'blur(12px)',
            boxShadow: shadows.card,
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {badgeIcon}
            <div>
              <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: colors.chocolate }}>
                {badgeLabel}
              </p>
              <p style={{ margin: 0, fontSize: '0.875rem', fontWeight: 400, color: colors.mocha }}>
                Fresh every day
              </p>
            </div>
          </div>
          <ArrowRight size={20} />
        </div>
      </div>
    </section>
  )
}
