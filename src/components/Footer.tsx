import { colors } from '@/tokens/design-system'
import { Instagram, Mail, MapPin } from './Icons'

const FOOTER_LINKS = {
  Discover: ['Menu', 'Seasonal', 'Bespoke Orders', 'Wholesale'],
  Company:  ['Our Story', 'Press', 'Careers', 'Sustainability'],
  Support:  ['Contact', 'Locations', 'Delivery', 'FAQs'],
}

const SOCIAL = [
  { icon: <Instagram size={18} />, label: 'Instagram', href: '#' },
  { icon: <Mail size={18} />,      label: 'Email',     href: '#' },
  { icon: <MapPin size={18} />,    label: 'Find us',   href: '#' },
]

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: colors.cream[900],
        borderTop: '1px solid rgba(255,255,255,0.04)',
      }}
    >
      {/* Main grid */}
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '48px 24px 32px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '32px',
        }}
        className="px-4 sm:px-6 md:px-8 lg:px-16 py-10 md:py-16"
      >
        {/* Brand column */}
        <div style={{ gridColumn: 'span 1' }}>
          <div
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: '1.5rem',
              fontWeight: 600,
              color: colors.cream[50],
              marginBottom: '4px',
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
              marginBottom: '20px',
            }}
          >
            Pâtisserie · Est. 2012
          </div>
          <p
            className="max-w-[220px] text-sm sm:text-[0.8125rem]"
            style={{
              fontWeight: 300,
              lineHeight: 1.7,
              color: colors.cream[500],
            }}
          >
            Handcrafted cakes for life's most precious moments. Made with love in Paris, London, and Tokyo.
          </p>

          {/* Social icons */}
          <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
            {SOCIAL.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255,255,255,0.06)',
                  color: colors.cream[400],
                  border: '1px solid rgba(255,255,255,0.08)',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget
                  el.style.backgroundColor = colors.rose
                  el.style.color = colors.white
                  el.style.borderColor = colors.rose
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget
                  el.style.backgroundColor = 'rgba(255,255,255,0.06)'
                  el.style.color = colors.cream[400]
                  el.style.borderColor = 'rgba(255,255,255,0.08)'
                }}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(FOOTER_LINKS).map(([group, links]) => (
          <div key={group}>
            <h4
              style={{
                fontSize: '0.6875rem',
                fontWeight: 500,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: colors.cream[500],
                marginBottom: '16px',
              }}
            >
              {group}
            </h4>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    style={{
                      fontSize: '0.875rem',
                      fontWeight: 300,
                      color: colors.cream[400],
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = colors.cream[100])}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = colors.cream[400])}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '20px 24px',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
        }}
        className="px-4 sm:px-6 md:px-8 lg:px-16"
      >
        <span style={{ fontSize: '0.75rem', fontWeight: 300, color: colors.cream[600] }}>
          © 2026 Cream Club. All rights reserved.
        </span>
        <div style={{ display: 'flex', gap: '20px' }}>
          {['Privacy Policy', 'Terms of Service', 'Cookie Settings'].map((link) => (
            <a
              key={link}
              href="#"
              style={{
                fontSize: '0.75rem',
                fontWeight: 300,
                color: colors.cream[600],
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = colors.cream[300])}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = colors.cream[600])}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
