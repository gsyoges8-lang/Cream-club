import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement> & { size?: number }

const base = (size: number, children: React.ReactNode, props: SVGProps<SVGSVGElement>) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {children}
  </svg>
)

export function ArrowRight({ size = 16, ...p }: IconProps) {
  return base(size, <><path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeWidth="1.5" /></>, p)
}

export function Plus({ size = 16, ...p }: IconProps) {
  return base(size, <><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.5" /></>, p)
}

export function Menu({ size = 20, ...p }: IconProps) {
  return base(size, <><path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.5" /></>, p)
}

export function Close({ size = 20, ...p }: IconProps) {
  return base(size, <><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="1.5" /></>, p)
}

export function MapPin({ size = 18, ...p }: IconProps) {
  return base(
    size,
    <>
      <path d="M12 2C8.69 2 6 4.69 6 8c0 5.25 6 13 6 13s6-7.75 6-13c0-3.31-2.69-6-6-6z" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="8" r="2" stroke="currentColor" strokeWidth="1.5" />
    </>,
    p,
  )
}

export function Clock({ size = 18, ...p }: IconProps) {
  return base(
    size,
    <>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.5" />
    </>,
    p,
  )
}

export function Star({ size = 16, ...p }: IconProps) {
  return base(
    size,
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="1.5" fill="none" />,
    p,
  )
}

export function StarFilled({ size = 16, ...p }: IconProps) {
  return base(
    size,
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor" />,
    p,
  )
}

export function Heart({ size = 16, ...p }: IconProps) {
  return base(
    size,
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" strokeWidth="1.5" />,
    p,
  )
}

export function ShoppingBag({ size = 18, ...p }: IconProps) {
  return base(
    size,
    <>
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" stroke="currentColor" strokeWidth="1.5" />
      <line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="1.5" />
      <path d="M16 10a4 4 0 0 1-8 0" stroke="currentColor" strokeWidth="1.5" />
    </>,
    p,
  )
}

export function ChevronDown({ size = 16, ...p }: IconProps) {
  return base(size, <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.5" />, p)
}

export function ChevronLeft({ size = 16, ...p }: IconProps) {
  return base(size, <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="1.5" />, p)
}

export function ChevronRight({ size = 16, ...p }: IconProps) {
  return base(size, <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="1.5" />, p)
}

export function Mail({ size = 18, ...p }: IconProps) {
  return base(
    size,
    <>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.5" />
      <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="1.5" />
    </>,
    p,
  )
}

export function Phone({ size = 18, ...p }: IconProps) {
  return base(
    size,
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6.29 6.29l1.06-.98a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="1.5" />,
    p,
  )
}

export function Instagram({ size = 18, ...p }: IconProps) {
  return base(
    size,
    <>
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </>,
    p,
  )
}

export function Leaf({ size = 16, ...p }: IconProps) {
  return base(
    size,
    <path d="M17 8C8 10 5.9 16.17 3.82 21.03L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2-8 2" stroke="currentColor" strokeWidth="1.5" />,
    p,
  )
}

export function Gift({ size = 18, ...p }: IconProps) {
  return base(
    size,
    <>
      <polyline points="20 12 20 22 4 22 4 12" stroke="currentColor" strokeWidth="1.5" />
      <rect x="2" y="7" width="20" height="5" stroke="currentColor" strokeWidth="1.5" />
      <line x1="12" y1="22" x2="12" y2="7" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" stroke="currentColor" strokeWidth="1.5" />
    </>,
    p,
  )
}

export function Globe({ size = 18, ...p }: IconProps) {
  return base(
    size,
    <>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      <line x1="2" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" strokeWidth="1.5" />
    </>,
    p,
  )
}

// Logo SVG — Cream Club wordmark
export function CreamClubLogo({ width = 120, color = '#2c1810' }: { width?: number; color?: string }) {
  return (
    <svg width={width} viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Decorative cake slice mark */}
      <path d="M6 28 L20 12 L34 28 Z" stroke={color} strokeWidth="1.5" fill="none" />
      <path d="M10 28 Q20 22 30 28" stroke={color} strokeWidth="1" fill="none" />
      {/* Cream drip */}
      <path d="M16 12 Q18 8 20 12" stroke={color} strokeWidth="1" fill="none" />
    </svg>
  )
}
