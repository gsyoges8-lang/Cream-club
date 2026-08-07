import { colors, shadows } from '@/tokens/design-system'

const FEATURES = [
  {
    title: 'Signature flavours',
    text: 'Layered cakes with seasonal fruit, silky ganache, and hand-finished details.',
  },
  {
    title: 'Made to order',
    text: 'Every cake is crafted fresh for your date, with custom sizes and dietary options.',
  },
  {
    title: 'Delivered with care',
    text: 'From consultation to doorstep, every detail is handled with the same care as the cake.',
  },
]

export default function Features() {
  return (
    <section
      id="features"
      className="px-4 py-16 sm:px-6 lg:px-8"
      style={{
        paddingTop: 'clamp(64px, 8vw, 112px)',
        paddingBottom: 'clamp(64px, 8vw, 112px)',
        backgroundColor: colors.cream[50],
      }}
    >
      <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
        <div style={{ marginBottom: '40px', maxWidth: '720px' }}>
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
            Why clients return
          </p>
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl"
            style={{
              margin: '10px 0 0',
              fontFamily: "'Fraunces', Georgia, serif",
              color: colors.chocolate,
            }}
          >
            Beautiful bakes with a calm, personal experience.
          </h2>
        </div>

        <div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3"
          style={{
            display: 'grid',
            gap: '20px',
          }}
        >
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              style={{
                padding: '24px',
                borderRadius: '20px',
                backgroundColor: colors.white,
                boxShadow: shadows.soft,
                border: `1px solid ${colors.cream[200]}`,
              }}
            >
              <h3
                style={{
                  margin: '0 0 10px',
                  fontSize: '1.05rem',
                  fontWeight: 600,
                  color: colors.chocolate,
                }}
              >
                {feature.title}
              </h3>
              <p style={{ margin: 0, lineHeight: 1.7, color: colors.mocha }}>{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
