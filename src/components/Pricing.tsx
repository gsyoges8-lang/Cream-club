import { colors, shadows } from '@/tokens/design-system'
import Button from './Button'

const PLANS = [
  {
    name: 'Signature',
    price: '$120+',
    description: 'For intimate celebrations and smaller gatherings.',
    perks: ['2-tier cake', 'Custom flavours', 'Delivery within city'],
    featured: false,
  },
  {
    name: 'Bespoke',
    price: '$220+',
    description: 'For milestone events with multiple tiers and details.',
    perks: ['Design consultation', 'Premium finishing', 'Priority scheduling'],
    featured: true,
  },
  {
    name: 'Grand Event',
    price: '$360+',
    description: 'For large celebrations with full styling and service.',
    perks: ['Custom showpiece cake', 'Styling support', 'Venue delivery'],
    featured: false,
  },
]

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="px-4 py-16 sm:px-6 lg:px-8"
      style={{
        paddingTop: 'clamp(64px, 8vw, 112px)',
        paddingBottom: 'clamp(64px, 8vw, 112px)',
        backgroundColor: colors.cream[100],
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
            Pricing
          </p>
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl"
            style={{
              margin: '10px 0 0',
              fontFamily: "'Fraunces', Georgia, serif",
              color: colors.chocolate,
            }}
          >
            Choose a celebration package that fits your moment.
          </h2>
        </div>

        <div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3"
          style={{
            display: 'grid',
            gap: '20px',
          }}
        >
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              style={{
                padding: '28px',
                borderRadius: '24px',
                backgroundColor: plan.featured ? colors.chocolate : colors.white,
                color: plan.featured ? colors.cream[50] : colors.chocolate,
                boxShadow: shadows.card,
                border: `1px solid ${plan.featured ? 'transparent' : colors.cream[200]}`,
              }}
            >
              <p style={{ margin: 0, fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', opacity: 0.8 }}>
                {plan.name}
              </p>
              <div style={{ margin: '16px 0 12px', fontFamily: "'Fraunces', Georgia, serif", fontSize: '2rem', fontWeight: 600 }}>
                {plan.price}
              </div>
              <p style={{ margin: '0 0 18px', lineHeight: 1.7, opacity: 0.9 }}>{plan.description}</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {plan.perks.map((perk) => (
                  <li key={perk} style={{ fontSize: '0.95rem' }}>• {perk}</li>
                ))}
              </ul>
              <Button as="a" href="#contact" variant={plan.featured ? 'gold' : 'secondary'} size="md">
                Book a call
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
