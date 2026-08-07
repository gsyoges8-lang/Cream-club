import { colors, shadows } from '@/tokens/design-system'

const TESTIMONIALS = [
  {
    quote: 'Every detail felt considered, and the cake looked like it belonged in a gallery.',
    author: 'Nina & Luke',
    role: 'Wedding clients',
  },
  {
    quote: 'The flavour balance was extraordinary, and the delivery felt effortless from start to finish.',
    author: 'Mina R.',
    role: 'Birthday celebration',
  },
  {
    quote: 'It was more than a cake; it was the highlight of the evening.',
    author: 'Carlos S.',
    role: 'Corporate event',
  },
]

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="px-4 py-16 sm:px-6 lg:px-8"
      style={{
        paddingTop: 'clamp(64px, 8vw, 112px)',
        paddingBottom: 'clamp(64px, 8vw, 112px)',
        backgroundColor: colors.white,
      }}
    >
      <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
        <div style={{ marginBottom: '40px', textAlign: 'center' }}>
          <p
            style={{
              margin: 0,
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: colors.rose,
            }}
          >
            Testimonials
          </p>
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl"
            style={{
              margin: '10px 0 0',
              fontFamily: "'Fraunces', Georgia, serif",
              color: colors.chocolate,
            }}
          >
            Loved by hosts who want something memorable.
          </h2>
        </div>

        <div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3"
          style={{
            display: 'grid',
            gap: '20px',
          }}
        >
          {TESTIMONIALS.map((item) => (
            <div
              key={item.author}
              style={{
                padding: '24px',
                borderRadius: '20px',
                backgroundColor: colors.cream[50],
                border: `1px solid ${colors.cream[200]}`,
                boxShadow: shadows.soft,
              }}
            >
              <p style={{ margin: '0 0 16px', lineHeight: 1.7, color: colors.mocha }}>
                “{item.quote}”
              </p>
              <div style={{ fontWeight: 600, color: colors.chocolate }}>{item.author}</div>
              <div style={{ fontSize: '0.875rem', color: colors.cream[500] }}>{item.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
