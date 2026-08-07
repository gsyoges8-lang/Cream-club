import type { ReactNode, CSSProperties } from 'react'
import { colors, shadows, radius } from '@/tokens/design-system'

type Variant = 'default' | 'raised' | 'flat' | 'dark'

const variants: Record<Variant, { bg: string; border: string; shadow: string; hoverShadow: string }> = {
  default: {
    bg: colors.cream[50],
    border: colors.cream[200],
    shadow: shadows.soft,
    hoverShadow: shadows.lift,
  },
  raised: {
    bg: colors.white,
    border: colors.cream[200],
    shadow: shadows.card,
    hoverShadow: shadows.deep,
  },
  flat: {
    bg: colors.cream[100],
    border: colors.cream[200],
    shadow: 'none',
    hoverShadow: shadows.soft,
  },
  dark: {
    bg: colors.chocolate,
    border: 'rgba(255,255,255,0.08)',
    shadow: 'none',
    hoverShadow: '0 8px 40px rgba(44,24,16,0.5)',
  },
}

type Props = {
  children: ReactNode
  variant?: Variant
  hover?: boolean
  padding?: string
  className?: string
  style?: CSSProperties
  as?: 'div' | 'article' | 'li'
}

export default function Card({
  children,
  variant = 'default',
  hover = true,
  padding = '28px',
  className,
  style,
  as: Tag = 'div',
}: Props) {
  const v = variants[variant]

  return (
    <Tag
      className={className}
      style={{
        backgroundColor: v.bg,
        border: `1px solid ${v.border}`,
        borderRadius: radius['2xl'],
        boxShadow: v.shadow,
        padding,
        transition: 'all 0.35s ease',
        ...style,
      }}
      onMouseEnter={hover ? (e) => {
        const el = e.currentTarget as HTMLElement
        el.style.transform = 'translateY(-4px)'
        el.style.boxShadow = v.hoverShadow
      } : undefined}
      onMouseLeave={hover ? (e) => {
        const el = e.currentTarget as HTMLElement
        el.style.transform = 'translateY(0)'
        el.style.boxShadow = v.shadow
      } : undefined}
    >
      {children}
    </Tag>
  )
}

// ─── ProductCard — specialized for cake/menu items ────────────────────────────

type ProductCardProps = {
  name: string
  desc: string
  price: string
  img: string
  tag?: string | null
  onAdd?: () => void
}

export function ProductCard({ name, desc, price, img, tag, onAdd }: ProductCardProps) {
  return (
    <article
      className="group flex flex-col overflow-hidden"
      style={{
        backgroundColor: colors.cream[50],
        border: `1px solid ${colors.cream[200]}`,
        borderRadius: radius['2xl'],
        boxShadow: shadows.soft,
        transition: 'all 0.35s ease',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget
        el.style.transform = 'translateY(-4px)'
        el.style.boxShadow = shadows.lift
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget
        el.style.transform = 'translateY(0)'
        el.style.boxShadow = shadows.soft
      }}
    >
      {/* Image */}
      <div
        className="relative overflow-hidden"
        style={{ height: '240px', backgroundColor: colors.cream[100] }}
      >
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {tag && (
          <div
            className="absolute top-3 left-3"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '4px 10px',
              fontSize: '0.6875rem',
              fontWeight: 500,
              borderRadius: radius.full,
              backgroundColor: colors.rose,
              color: colors.white,
              boxShadow: '0 2px 8px rgba(212,120,138,0.4)',
            }}
          >
            {tag}
          </div>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5 gap-2">
        <h3
          style={{
            fontFamily: "'Fraunces', Georgia, serif",
            fontSize: '1.125rem',
            fontWeight: 600,
            color: colors.chocolate,
          }}
        >
          {name}
        </h3>
        <p
          className="flex-1"
          style={{ fontSize: '0.875rem', fontWeight: 300, lineHeight: 1.6, color: colors.mocha }}
        >
          {desc}
        </p>

        {/* Footer row */}
        <div
          className="flex items-center justify-between mt-3 pt-3"
          style={{ borderTop: `1px solid ${colors.cream[200]}` }}
        >
          <span
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: '1.1rem',
              fontWeight: 600,
              color: colors.chocolate,
            }}
          >
            {price}
          </span>
          <button
            onClick={onAdd}
            aria-label={`Add ${name} to order`}
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: colors.cream[100],
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => ((e.currentTarget).style.backgroundColor = colors.roseLight)}
            onMouseLeave={(e) => ((e.currentTarget).style.backgroundColor = colors.cream[100])}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 2v10M2 7h10" stroke={colors.chocolate} strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  )
}
