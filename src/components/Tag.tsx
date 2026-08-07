import type { ReactNode } from 'react'
import { colors, radius } from '@/tokens/design-system'

type Props = {
  children: ReactNode
  active?: boolean
  onClick?: () => void
}

export default function Tag({ children, active = false, onClick }: Props) {
  const interactive = !!onClick

  return (
    <span
      role={interactive ? 'button' : undefined}
      tabIndex={interactive ? 0 : undefined}
      onClick={onClick}
      onKeyDown={interactive ? (e) => e.key === 'Enter' && onClick?.() : undefined}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '8px 18px',
        fontSize: '0.8125rem',
        fontWeight: active ? 500 : 400,
        letterSpacing: '0.02em',
        lineHeight: 1,
        borderRadius: radius.full,
        backgroundColor: active ? colors.chocolate : colors.cream[100],
        color: active ? colors.cream[50] : colors.mocha,
        border: `1px solid ${active ? 'transparent' : colors.cream[200]}`,
        cursor: interactive ? 'pointer' : 'default',
        transition: 'all 0.2s ease',
        userSelect: 'none',
        whiteSpace: 'nowrap',
      }}
      onMouseEnter={interactive ? (e) => {
        if (!active) {
          (e.currentTarget as HTMLElement).style.backgroundColor = colors.cream[200]
          ;(e.currentTarget as HTMLElement).style.borderColor = colors.cream[400]
        }
      } : undefined}
      onMouseLeave={interactive ? (e) => {
        if (!active) {
          (e.currentTarget as HTMLElement).style.backgroundColor = colors.cream[100]
          ;(e.currentTarget as HTMLElement).style.borderColor = colors.cream[200]
        }
      } : undefined}
    >
      {children}
    </span>
  )
}
