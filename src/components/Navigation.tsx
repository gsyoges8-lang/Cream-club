import { useState } from 'react'
import { colors, shadows } from '@/tokens/design-system'
import Button from './Button'
import { Menu, Close } from './Icons'

const NAV_LINKS = [
  { label: 'Menu', href: '#menu' },
  { label: 'Story', href: '#story' },
  { label: 'Locations', href: '#locations' },
  { label: 'Contact', href: '#contact' },
]

type Props = { scrolled?: boolean }

export default function Navigation({ scrolled = false }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: scrolled ? 'rgba(253,249,243,0.96)' : 'rgba(253,249,243,0.8)',
        backdropFilter: scrolled ? 'blur(14px)' : 'blur(8px)',
        borderBottom: scrolled ? `1px solid ${colors.cream[200]}` : 'none',
        boxShadow: scrolled ? shadows.soft : 'none',
        transition: 'all 0.35s ease',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '78px',
        }}
        className="px-4 sm:px-6 md:px-8 lg:px-16"
      >
        <a href="#" style={{ textDecoration: 'none', lineHeight: 1 }}>
          <div
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: '1.375rem',
              fontWeight: 600,
              color: colors.chocolate,
              letterSpacing: '-0.01em',
            }}
          >
            Cream Club
          </div>
          <div
            style={{
              fontSize: '0.625rem',
              fontWeight: 300,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: colors.cream[500],
              marginTop: '2px',
            }}
          >
            Pâtisserie
          </div>
        </a>

        <div className="hidden md:flex items-center gap-2 rounded-full border border-[rgba(44,24,16,0.08)] bg-white/70 px-3 py-2 shadow-sm" style={{ backgroundColor: 'rgba(255,255,255,0.7)' }}>
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              style={{
                textDecoration: 'none',
                fontSize: '0.875rem',
                fontWeight: 400,
                letterSpacing: '0.02em',
                color: colors.mocha,
                padding: '8px 12px',
                borderRadius: '999px',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.color = colors.rose
                el.style.backgroundColor = 'rgba(212,120,138,0.1)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.color = colors.mocha
                el.style.backgroundColor = 'transparent'
              }}
            >
              {label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <Button as="a" href="#contact" variant="primary" size="md">
            Order Now
          </Button>
        </div>

        <button
          className="md:hidden flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(44,24,16,0.12)] bg-white/80"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{ cursor: 'pointer', color: colors.chocolate }}
        >
          {open ? <Close size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div className="md:hidden">
        <div
          onClick={() => setOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(44,24,16,0.35)',
            opacity: open ? 1 : 0,
            pointerEvents: open ? 'auto' : 'none',
            transition: 'opacity 0.25s ease',
            zIndex: 40,
          }}
        />

        <div
          style={{
            position: 'fixed',
            top: 0,
            right: 0,
            width: 'min(86vw, 320px)',
            height: '100vh',
            backgroundColor: colors.cream[50],
            borderLeft: `1px solid ${colors.cream[200]}`,
            boxShadow: shadows.deep,
            transform: open ? 'translateX(0)' : 'translateX(100%)',
            transition: 'transform 0.3s ease',
            zIndex: 45,
            padding: '24px 20px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
            <div>
              <div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: '1.15rem', fontWeight: 600, color: colors.chocolate }}>
                Menu
              </div>
              <div style={{ fontSize: '0.68rem', fontWeight: 400, letterSpacing: '0.2em', textTransform: 'uppercase', color: colors.cream[500] }}>
                Choose a section
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '8px',
                color: colors.chocolate,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Close size={20} />
            </button>
          </div>

          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  style={{
                    display: 'block',
                    padding: '12px 14px',
                    textDecoration: 'none',
                    fontSize: '1rem',
                    fontWeight: 500,
                    color: colors.mocha,
                    borderRadius: '14px',
                    backgroundColor: 'transparent',
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(212,120,138,0.1)')}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = 'transparent')}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div style={{ marginTop: 'auto', paddingTop: '20px' }}>
            <Button as="a" href="#contact" variant="primary" size="md" onClick={() => setOpen(false)}>
              Start your order
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
