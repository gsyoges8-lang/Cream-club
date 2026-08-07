import type { ReactNode } from 'react'
import { colors, radius } from '@/tokens/design-system'

type Tone = 'rose' | 'gold' | 'chocolate' | 'cream' | 'sage'

const tones: Record<Tone, { bg: string; color: string; border?: string }> = {
  rose:      { bg: colors.rose,      color: colors.white },
  gold:      { bg: colors.gold,      color: colors.chocolate },
  chocolate: { bg: colors.chocolate, color: colors.cream[50] },
  cream:     { bg: colors.cream[100], color: colors.mocha, border: colors.cream[300] },
  sage:      { bg: '#ddeee1',        color: '#3a6645' },
}

type Props = {
  children: ReactNode
  tone?: Tone
  size?: 'sm' | 'md'
  dot?: boolean
}

export default function Badge({ children, tone = 'rose', size = 'sm', dot = false }: Props) {
  const t = tones[tone]
  const px = size === 'sm' ? '10px' : '14px'
  const py = size === 'sm' ? '4px'  : '6px'
  const fs = size === 'sm' ? '0.6875rem' : '0.8125rem'

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '5px',
        padding: `${py} ${px}`,
        fontSize: fs,
        fontWeight: 500,
        letterSpacing: '0.02em',
        lineHeight: 1,
        borderRadius: radius.full,
        backgroundColor: t.bg,
        color: t.color,
        border: t.border ? `1px solid ${t.border}` : 'none',
        whiteSpace: 'nowrap',
        boxShadow: tone === 'rose' ? '0 2px 8px rgba(212,120,138,0.3)' : 'none',
      }}
    >
      {dot && (
        <span
          style={{
            width: '5px',
            height: '5px',
            borderRadius: '50%',
            backgroundColor: t.color,
            opacity: 0.7,
            flexShrink: 0,
          }}
        />
      )}
      {children}
    </span>
  )
}
