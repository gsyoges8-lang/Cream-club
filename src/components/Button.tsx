import { type ButtonHTMLAttributes, type AnchorHTMLAttributes, type ReactNode } from 'react'
import { colors, shadows, radius, transitions } from '@/tokens/design-system'
import { ArrowRight } from './Icons'

// ─── Variant definitions ──────────────────────────────────────────────────────

type Variant = 'primary' | 'secondary' | 'ghost' | 'gold' | 'danger'
type Size    = 'sm' | 'md' | 'lg'

const variantStyles: Record<Variant, {
  bg: string; color: string; border: string; hoverBg: string; hoverBorder: string; shadow: string
}> = {
  primary: {
    bg: colors.chocolate,
    color: colors.cream[50],
    border: 'transparent',
    hoverBg: colors.mocha,
    hoverBorder: 'transparent',
    shadow: shadows.card,
  },
  secondary: {
    bg: 'transparent',
    color: colors.mocha,
    border: colors.cream[300],
    hoverBg: colors.cream[100],
    hoverBorder: colors.cream[500],
    shadow: 'none',
  },
  ghost: {
    bg: 'transparent',
    color: colors.mocha,
    border: 'transparent',
    hoverBg: colors.cream[100],
    hoverBorder: 'transparent',
    shadow: 'none',
  },
  gold: {
    bg: colors.gold,
    color: colors.chocolate,
    border: 'transparent',
    hoverBg: colors.goldDark,
    hoverBorder: 'transparent',
    shadow: shadows.gold,
  },
  danger: {
    bg: colors.rose,
    color: colors.white,
    border: 'transparent',
    hoverBg: colors.roseDark,
    hoverBorder: 'transparent',
    shadow: shadows.rose,
  },
}

const sizeStyles: Record<Size, { px: string; py: string; fontSize: string; gap: string }> = {
  sm: { px: '16px', py: '8px',  fontSize: '0.8125rem', gap: '6px' },
  md: { px: '24px', py: '11px', fontSize: '0.875rem',  gap: '8px' },
  lg: { px: '32px', py: '15px', fontSize: '1rem',      gap: '10px' },
}

// ─── Props ────────────────────────────────────────────────────────────────────

type BaseProps = {
  variant?: Variant
  size?: Size
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  fullWidth?: boolean
  children: ReactNode
}

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button'; href?: never }
type AnchorProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'a'; href: string }

type Props = ButtonProps | AnchorProps

// ─── Component ────────────────────────────────────────────────────────────────

export default function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  fullWidth = false,
  children,
  as,
  ...rest
}: Props) {
  const v = variantStyles[variant]
  const s = sizeStyles[size]

  const baseStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: s.gap,
    padding: `${s.py} ${s.px}`,
    fontSize: s.fontSize,
    fontFamily: "'Outfit', system-ui, sans-serif",
    fontWeight: 500,
    letterSpacing: '0.02em',
    lineHeight: 1,
    borderRadius: radius.full,
    border: `1px solid ${v.border}`,
    backgroundColor: v.bg,
    color: v.color,
    boxShadow: v.shadow,
    cursor: 'pointer',
    textDecoration: 'none',
    transition: transitions.normal,
    width: fullWidth ? '100%' : 'auto',
    whiteSpace: 'nowrap' as const,
    userSelect: 'none' as const,
  }

  const showArrow = !icon && variant === 'primary'
  const resolvedIcon = icon ?? (showArrow ? <ArrowRight size={14} /> : null)

  const content = (
    <>
      {iconPosition === 'left' && resolvedIcon}
      {children}
      {iconPosition === 'right' && resolvedIcon}
    </>
  )

  const handlers = {
    onMouseEnter: (e: React.MouseEvent<HTMLElement>) => {
      const el = e.currentTarget as HTMLElement
      el.style.backgroundColor = v.hoverBg
      el.style.borderColor = v.hoverBorder
      el.style.transform = 'translateY(-2px)'
      el.style.boxShadow = variant === 'primary' ? shadows.lift
        : variant === 'gold' ? '0 8px 28px rgba(201,162,39,0.5)'
        : variant === 'danger' ? '0 8px 28px rgba(212,120,138,0.5)'
        : 'none'
    },
    onMouseLeave: (e: React.MouseEvent<HTMLElement>) => {
      const el = e.currentTarget as HTMLElement
      el.style.backgroundColor = v.bg
      el.style.borderColor = v.border
      el.style.transform = 'translateY(0)'
      el.style.boxShadow = v.shadow
    },
  }

  if (as === 'a') {
    const { as: _as, variant: _v, size: _s, icon: _i, iconPosition: _ip, fullWidth: _fw, ...anchorRest } = rest as AnchorProps
    return (
      <a style={baseStyle} {...handlers} {...anchorRest}>
        {content}
      </a>
    )
  }

  const { as: _as, variant: _v, size: _s, icon: _i, iconPosition: _ip, fullWidth: _fw, ...btnRest } = rest as ButtonProps
  return (
    <button style={baseStyle} {...handlers} {...(btnRest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  )
}
