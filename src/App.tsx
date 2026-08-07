import { useState, useEffect } from 'react'
import { colors, shadows, gradients } from '@/tokens/design-system'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/Hero'
import FeaturesSection from '@/components/Features'
import PricingSection from '@/components/Pricing'
import TestimonialsSection from '@/components/Testimonials'
import Footer from '@/components/Footer'
import Button from '@/components/Button'
import Badge from '@/components/Badge'
import Tag from '@/components/Tag'
import { ProductCard } from '@/components/Card'
import { TextInput, Textarea, SelectInput } from '@/components/Input'
import { ArrowRight, MapPin, Clock, Leaf, Gift, Globe, StarFilled } from '@/components/Icons'

// ─── Data ─────────────────────────────────────────────────────────────────────

const MENU_ITEMS = [
  {
    category: 'Signature Cakes',
    items: [
      {
        name: 'Velvet Noir',
        desc: 'Dark chocolate sponge, whipped ganache, edible gold leaf',
        price: '$48',
        tag: 'Bestseller',
        img: 'https://images.unsplash.com/photo-1626263468007-a9e0cf83f1ac?w=480&h=560&fit=crop&auto=format',
      },
      {
        name: 'Strawberry Mirage',
        desc: 'Vanilla chiffon, strawberry compote, chantilly cream',
        price: '$42',
        tag: 'Seasonal',
        img: 'https://images.unsplash.com/photo-1583338917451-face2751d8d5?w=480&h=560&fit=crop&auto=format',
      },
      {
        name: 'Lavender Clouds',
        desc: 'Honey sponge, lavender cream, candied lemon zest',
        price: '$44',
        tag: 'New',
        img: 'https://images.unsplash.com/photo-1595144780677-6d0b5abbd089?w=480&h=560&fit=crop&auto=format',
      },
      {
        name: 'Caramel Reverie',
        desc: 'Salted caramel layers, praline crunch, vanilla mousse',
        price: '$46',
        tag: null,
        img: 'https://images.unsplash.com/photo-1639832899627-5d77c5ce1eb8?w=480&h=560&fit=crop&auto=format',
      },
    ],
  },
  {
    category: 'Petit Fours',
    items: [
      {
        name: 'Rose Macarons',
        desc: 'French meringue shells, rose buttercream, dried petals',
        price: '$18 / 6pc',
        tag: null,
        img: 'https://images.unsplash.com/photo-1702770443047-22a2750a84dc?w=480&h=560&fit=crop&auto=format',
      },
      {
        name: 'Pistachio Éclairs',
        desc: 'Choux pastry, pistachio cream, white chocolate glaze',
        price: '$22 / 4pc',
        tag: 'Chef Pick',
        img: 'https://images.unsplash.com/photo-1731399295775-45dc1fc7e52a?w=480&h=560&fit=crop&auto=format',
      },
    ],
  },
]

const TESTIMONIALS = [
  {
    quote: "Every bite is a ceremony. Cream Club redefined what a birthday cake could be.",
    author: 'Isabelle M.',
    city: 'Paris',
    stars: 5,
  },
  {
    quote: "The most beautiful cakes I have ever tasted. Art you can eat.",
    author: 'Oliver T.',
    city: 'London',
    stars: 5,
  },
  {
    quote: "They made our wedding cake dreams into something beyond imagination.",
    author: 'Saya & Kenji R.',
    city: 'Tokyo',
    stars: 5,
  },
]

const LOCATIONS = [
  { city: 'Paris',  address: '14 Rue de la Paix, 75002',    hours: 'Tue–Sun, 9am–7pm' },
  { city: 'London', address: '27 Marylebone High St, W1U',   hours: 'Mon–Sat, 9am–8pm' },
  { city: 'Tokyo',  address: '3-1-1 Omotesando, Shibuya',   hours: 'Wed–Mon, 10am–7pm' },
]

// ─── Eyebrow label ─────────────────────────────────────────────────────────────

function Eyebrow({ children, dark = false }: { children: string; dark?: boolean }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
      <div style={{ width: '32px', height: '1px', backgroundColor: dark ? colors.gold : colors.rose }} />
      <span
        style={{
          fontSize: '0.6875rem',
          fontWeight: 500,
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          color: dark ? colors.gold : colors.rose,
        }}
      >
        {children}
      </span>
    </div>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section
      id="hero"
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        minHeight: '100vh',
        paddingTop: '80px',
      }}
      className="grid-cols-1 md:grid-cols-2"
    >
      {/* Text panel */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 'clamp(40px, 6vw, 80px) clamp(24px, 5vw, 80px)',
          backgroundColor: colors.cream[50],
        }}
      >
        <Eyebrow>Artisan Pâtisserie</Eyebrow>

        <h1
          style={{
            fontFamily: "'Fraunces', Georgia, serif",
            fontSize: 'clamp(2.75rem, 5.5vw, 5.5rem)',
            fontWeight: 600,
            lineHeight: 1.05,
            color: colors.chocolate,
            margin: '0 0 24px',
          }}
        >
          Where Cream
          <br />
          <em
            style={{
              fontStyle: 'normal',
              fontWeight: 300,
              color: colors.rose,
            }}
          >
            becomes
          </em>
          <br />
          an Art Form.
        </h1>

        <p
          style={{
            fontSize: '1.0625rem',
            fontWeight: 300,
            lineHeight: 1.7,
            color: colors.mocha,
            maxWidth: '400px',
            margin: '0 0 40px',
          }}
        >
          Handcrafted cakes for life's most precious moments. Every layer made with intention,
          every decoration placed by hand.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
          <Button as="a" href="#menu" variant="primary" size="lg">
            Explore Menu
          </Button>
          <Button as="a" href="#story" variant="secondary" size="lg" icon={null}>
            Our Story
          </Button>
        </div>

        {/* Stats */}
        <div
          style={{
            display: 'flex',
            gap: '40px',
            marginTop: '64px',
            paddingTop: '32px',
            borderTop: `1px solid ${colors.cream[200]}`,
          }}
        >
          {[
            { value: '12+', label: 'Years of craft' },
            { value: '340+', label: 'Bespoke cakes' },
            { value: '98%', label: 'Happy clients' },
          ].map((s) => (
            <div key={s.label} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontSize: '1.875rem',
                  fontWeight: 600,
                  color: colors.chocolate,
                }}
              >
                {s.value}
              </span>
              <span style={{ fontSize: '0.75rem', fontWeight: 400, color: colors.cream[500] }}>
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Image panel */}
      <div
        style={{ position: 'relative', minHeight: '360px', backgroundColor: colors.cream[200] }}
      >
        <img
          src="https://images.unsplash.com/photo-1711141326113-e6b607fd78ef?w=900&h=1100&fit=crop&auto=format"
          alt="A display case filled with artisan cakes and pastries"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: gradients.heroVignette }} />

        {/* Today's special badge */}
        <div
          style={{
            position: 'absolute',
            bottom: '32px',
            right: '32px',
            padding: '16px 20px',
            borderRadius: '16px',
            backgroundColor: 'rgba(253,249,243,0.92)',
            backdropFilter: 'blur(12px)',
            boxShadow: shadows.card,
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: colors.roseLight,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '18px',
            }}
          >
            🎂
          </div>
          <div>
            <p style={{ fontSize: '0.875rem', fontWeight: 500, color: colors.chocolate, margin: 0 }}>
              Today's Special
            </p>
            <p style={{ fontSize: '0.75rem', fontWeight: 300, color: colors.mocha, margin: '2px 0 0' }}>
              Seasonal Strawberry Mirage
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Marquee ──────────────────────────────────────────────────────────────────

function Marquee() {
  const words = ['Velvet Noir', '·', 'Rose Macarons', '·', 'Caramel Reverie', '·', 'Lavender Clouds', '·', 'Pistachio Éclairs', '·', 'Strawberry Mirage', '·']
  return (
    <div
      style={{
        overflow: 'hidden',
        padding: '14px 0',
        backgroundColor: colors.chocolate,
        borderTop: `1px solid ${colors.mocha}`,
        borderBottom: `1px solid ${colors.mocha}`,
      }}
    >
      <div style={{ display: 'flex', animation: 'marquee 24s linear infinite', whiteSpace: 'nowrap' }}>
        {[...words, ...words].map((w, i) => (
          <span
            key={i}
            style={{
              margin: '0 24px',
              fontSize: '0.8125rem',
              fontWeight: 300,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: i % 2 === 1 ? colors.rose : colors.cream[200],
            }}
          >
            {w}
          </span>
        ))}
      </div>
    </div>
  )
}

// ─── Menu Section ─────────────────────────────────────────────────────────────

function MenuSection() {
  const [activeIdx, setActiveIdx] = useState(0)
  const category = MENU_ITEMS[activeIdx]

  return (
    <section
      id="menu"
      style={{
        padding: 'clamp(64px, 8vw, 144px) clamp(24px, 5vw, 64px)',
        maxWidth: '1280px',
        margin: '0 auto',
      }}
    >
      {/* Header row */}
      <div
        className="mb-10 flex flex-col items-start gap-5 sm:flex-row sm:items-end sm:justify-between sm:gap-6"
        style={{
          flexWrap: 'wrap',
          marginBottom: '56px',
        }}
      >
        <div>
          <Eyebrow>The Collection</Eyebrow>
          <h2
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 600,
              lineHeight: 1.1,
              color: colors.chocolate,
              margin: 0,
            }}
          >
            Our Menu
          </h2>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2" style={{ display: 'flex', gap: '8px' }}>
          {MENU_ITEMS.map((cat, i) => (
            <Tag key={cat.category} active={activeIdx === i} onClick={() => setActiveIdx(i)}>
              {cat.category}
            </Tag>
          ))}
        </div>
      </div>

      {/* Product grid */}
      <div
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4"
        style={{
          display: 'grid',
          gap: '24px',
        }}
      >
        {category.items.map((item) => (
          <ProductCard key={item.name} {...item} />
        ))}
      </div>

      {/* View all */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '48px' }}>
        <Button as="a" href="#" variant="secondary" size="md" icon={<ArrowRight size={14} />}>
          View Full Menu
        </Button>
      </div>
    </section>
  )
}

// ─── Story Section ────────────────────────────────────────────────────────────

function StorySection() {
  const values = [
    { icon: <Leaf size={16} />,  label: 'Organic Ingredients' },
    { icon: '✋',                  label: 'Handcrafted Daily' },
    { icon: <Globe size={16} />, label: 'Ethically Sourced' },
    { icon: <Gift size={16} />,  label: 'Custom Orders' },
  ]

  return (
    <section id="story" className="overflow-hidden" style={{ position: 'relative' }}>
      {/* Split canvas */}
      <div style={{ position: 'absolute', inset: 0, display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        <div style={{ backgroundColor: colors.chocolate }} />
        <div style={{ backgroundColor: colors.cream[100] }} />
      </div>

      <div
        style={{
          position: 'relative',
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
        }}
        className="grid-cols-1 md:grid-cols-2"
      >
        {/* Dark text panel */}
        <div
          className="px-4 py-16 sm:px-6 lg:px-8"
          style={{
            paddingTop: 'clamp(64px, 8vw, 112px)',
            paddingBottom: 'clamp(64px, 8vw, 112px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Eyebrow dark>Est. 2012</Eyebrow>
          <h2
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: 'clamp(2rem, 3.5vw, 3.25rem)',
              fontWeight: 600,
              lineHeight: 1.1,
              color: colors.cream[50],
              margin: '0 0 24px',
            }}
          >
            A Club Built on
            <em
              style={{ display: 'block', fontStyle: 'normal', fontWeight: 300, color: colors.goldLight }}
            >
              Pure Devotion.
            </em>
          </h2>
          <p
            style={{
              fontSize: '1rem',
              fontWeight: 300,
              lineHeight: 1.7,
              color: colors.cream[200],
              maxWidth: '400px',
              margin: '0 0 16px',
            }}
          >
            Cream Club was born in a small Parisian kitchen, where founder Céline Moreau spent
            three years perfecting a single recipe: the perfect cream.
          </p>
          <p
            style={{
              fontSize: '1rem',
              fontWeight: 300,
              lineHeight: 1.7,
              color: colors.cream[300],
              maxWidth: '400px',
              margin: '0 0 40px',
            }}
          >
            We source our cream from a single family dairy in Normandy, our chocolate from
            a co-op in Oaxaca, and our vanilla from hand-selected Madagascar pods.
          </p>

          {/* Values grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            {values.map((v) => (
              <div
                key={v.label}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: colors.cream[200],
                  fontSize: '0.8125rem',
                  fontWeight: 400,
                }}
              >
                <span style={{ opacity: 0.8, flexShrink: 0 }}>{v.icon}</span>
                {v.label}
              </div>
            ))}
          </div>
        </div>

        {/* Image panel */}
        <div className="min-h-[320px] sm:min-h-[420px] lg:min-h-[480px]" style={{ position: 'relative', backgroundColor: colors.cream[200] }}>
          <img
            src="https://images.unsplash.com/photo-1739132124985-6c9277e268b5?w=800&h=1000&fit=crop&auto=format"
            alt="A beautiful display of artisan cakes and pastries"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          />
          {/* Founder quote */}
          <div
            className="left-4 right-4 bottom-4 sm:left-6 sm:right-6 sm:bottom-6"
            style={{
              position: 'absolute',
              padding: '24px',
              borderRadius: '20px',
              backgroundColor: 'rgba(253,249,243,0.9)',
              backdropFilter: 'blur(16px)',
              boxShadow: shadows.card,
            }}
          >
            <p
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontSize: '1.0625rem',
                fontWeight: 300,
                fontStyle: 'italic',
                lineHeight: 1.5,
                color: colors.chocolate,
                margin: '0 0 12px',
              }}
            >
              "Every cake we make is a tiny monument to joy."
            </p>
            <p style={{ fontSize: '0.75rem', fontWeight: 500, color: colors.rose, margin: 0 }}>
              — Céline Moreau, Founder
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Testimonials ─────────────────────────────────────────────────────────────

function Testimonials() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % TESTIMONIALS.length), 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <section
      style={{
        padding: 'clamp(64px, 8vw, 144px) 24px',
        backgroundColor: colors.cream[100],
      }}
    >
      <div style={{ maxWidth: '768px', margin: '0 auto', textAlign: 'center' }}>
        {/* Eyebrow centered */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '48px' }}>
          <div style={{ width: '32px', height: '1px', backgroundColor: colors.rose }} />
          <span
            style={{
              fontSize: '0.6875rem',
              fontWeight: 500,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: colors.rose,
            }}
          >
            Voices
          </span>
          <div style={{ width: '32px', height: '1px', backgroundColor: colors.rose }} />
        </div>

        {/* Testimonial */}
        <div style={{ position: 'relative', minHeight: '160px' }}>
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                opacity: active === i ? 1 : 0,
                transform: active === i ? 'translateY(0)' : 'translateY(8px)',
                transition: 'all 0.5s ease',
                pointerEvents: active === i ? 'auto' : 'none',
              }}
            >
              {/* Stars */}
              <div style={{ display: 'flex', gap: '4px', marginBottom: '20px', color: colors.gold }}>
                {Array.from({ length: t.stars }).map((_, j) => (
                  <StarFilled key={j} size={16} />
                ))}
              </div>
              <blockquote
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontSize: 'clamp(1.1rem, 2.5vw, 1.75rem)',
                  fontWeight: 300,
                  fontStyle: 'italic',
                  lineHeight: 1.45,
                  color: colors.chocolate,
                  margin: '0 0 20px',
                }}
              >
                "{t.quote}"
              </blockquote>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontSize: '0.875rem', fontWeight: 500, color: colors.mocha }}>
                  {t.author}
                </span>
                <span style={{ fontSize: '0.875rem', fontWeight: 300, color: colors.cream[400] }}>
                  — {t.city}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Dot navigation */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '48px' }}>
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Testimonial ${i + 1}`}
              style={{
                height: '8px',
                width: active === i ? '24px' : '8px',
                borderRadius: '4px',
                border: 'none',
                backgroundColor: active === i ? colors.rose : colors.cream[300],
                cursor: 'pointer',
                padding: 0,
                transition: 'all 0.3s ease',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Locations ────────────────────────────────────────────────────────────────

function Locations() {
  return (
    <section
      id="locations"
      className="px-4 py-16 sm:px-6 lg:px-8"
      style={{
        paddingTop: 'clamp(64px, 8vw, 144px)',
        paddingBottom: 'clamp(64px, 8vw, 144px)',
        maxWidth: '1280px',
        margin: '0 auto',
      }}
    >
      <Eyebrow>Find Us</Eyebrow>
      <h2
        style={{
          fontFamily: "'Fraunces', Georgia, serif",
          fontSize: 'clamp(2rem, 4vw, 3.5rem)',
          fontWeight: 600,
          lineHeight: 1.1,
          color: colors.chocolate,
          margin: '0 0 56px',
        }}
      >
        Our Ateliers
      </h2>

      <div
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
        style={{
          display: 'grid',
          gap: '24px',
        }}
      >
        {LOCATIONS.map((loc) => (
          <div
            key={loc.city}
            style={{
              padding: '28px',
              borderRadius: '20px',
              backgroundColor: colors.cream[50],
              border: `1px solid ${colors.cream[200]}`,
              boxShadow: shadows.soft,
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget
              el.style.boxShadow = shadows.card
              el.style.borderColor = colors.cream[300]
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget
              el.style.boxShadow = shadows.soft
              el.style.borderColor = colors.cream[200]
            }}
          >
            {/* Icon */}
            <div
              className="h-10 w-10"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: colors.roseLight,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: colors.rose,
              }}
            >
              <MapPin size={18} />
            </div>

            <h3
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontSize: '1.375rem',
                fontWeight: 600,
                color: colors.chocolate,
                margin: 0,
              }}
            >
              {loc.city}
            </h3>

            <p style={{ fontSize: '0.875rem', fontWeight: 300, lineHeight: 1.6, color: colors.mocha, margin: 0 }}>
              {loc.address}
            </p>

            <div
              style={{ display: 'flex', alignItems: 'center', gap: '6px', color: colors.cream[500], fontSize: '0.8125rem', fontWeight: 400 }}
            >
              <Clock size={14} />
              {loc.hours}
            </div>

            <a
              href="#"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.875rem',
                fontWeight: 500,
                color: colors.rose,
                textDecoration: 'none',
                marginTop: '4px',
                transition: 'gap 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.gap = '10px')}
              onMouseLeave={(e) => (e.currentTarget.style.gap = '6px')}
            >
              Get directions <ArrowRight size={14} />
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

// ─── Contact / Order Form ─────────────────────────────────────────────────────

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', occasion: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  const occasionOptions = [
    { value: 'wedding',     label: 'Wedding' },
    { value: 'birthday',    label: 'Birthday' },
    { value: 'corporate',   label: 'Corporate Event' },
    { value: 'celebration', label: 'Celebration' },
    { value: 'other',       label: 'Other' },
  ]

  return (
    <section
      id="contact"
      style={{
        padding: 'clamp(64px, 8vw, 144px) clamp(24px, 5vw, 64px)',
        backgroundColor: colors.chocolate,
      }}
    >
      <div style={{ maxWidth: '640px', margin: '0 auto' }}>
        <Eyebrow dark>Bespoke Orders</Eyebrow>
        <h2
          style={{
            fontFamily: "'Fraunces', Georgia, serif",
            fontSize: 'clamp(2rem, 4vw, 3.25rem)',
            fontWeight: 600,
            lineHeight: 1.1,
            color: colors.cream[50],
            margin: '0 0 16px',
          }}
        >
          Let's Create
          <em style={{ display: 'block', fontStyle: 'normal', fontWeight: 300, color: colors.goldLight }}>
            Something Extraordinary.
          </em>
        </h2>
        <p
          style={{
            fontSize: '1rem',
            fontWeight: 300,
            lineHeight: 1.7,
            color: colors.cream[300],
            margin: '0 0 48px',
            maxWidth: '440px',
          }}
        >
          Whether it's a wedding, a birthday, or a quiet Tuesday — we'd love to craft your cake.
          We'll be in touch within 48 hours.
        </p>

        {sent ? (
          <div
            style={{
              padding: '40px',
              borderRadius: '20px',
              backgroundColor: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🎂</div>
            <h3
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontSize: '1.5rem',
                fontWeight: 600,
                color: colors.cream[50],
                margin: '0 0 8px',
              }}
            >
              Merci!
            </h3>
            <p style={{ fontSize: '0.9375rem', fontWeight: 300, color: colors.cream[300], margin: 0 }}>
              We've received your enquiry and will be in touch within 48 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="grid-cols-1 sm:grid-cols-2">
              <TextInput
                label="Your Name"
                id="name"
                dark
                placeholder="Isabelle Moreau"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
              <TextInput
                label="Email Address"
                id="email"
                type="email"
                dark
                placeholder="isabelle@example.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>

            <SelectInput
              label="Occasion"
              id="occasion"
              dark
              placeholder="Select an occasion…"
              options={occasionOptions}
              value={form.occasion}
              onChange={(e) => setForm({ ...form, occasion: e.target.value })}
            />

            <Textarea
              label="Your Vision"
              id="message"
              dark
              placeholder="Tell us about your dream cake — flavours, size, occasion date…"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={4}
            />

            <div>
              <Button type="submit" variant="gold" size="lg">
                Send Enquiry
              </Button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}

// ─── Design System Showcase ───────────────────────────────────────────────────

function DesignSystemSection() {
  return (
    <section
      style={{
        padding: 'clamp(64px, 8vw, 120px) clamp(24px, 5vw, 64px)',
        backgroundColor: colors.cream[100],
        borderTop: `1px solid ${colors.cream[200]}`,
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <Eyebrow>System</Eyebrow>
        <h2
          style={{
            fontFamily: "'Fraunces', Georgia, serif",
            fontSize: '2.5rem',
            fontWeight: 600,
            color: colors.chocolate,
            margin: '0 0 56px',
          }}
        >
          Design System
        </h2>

        {/* Colors */}
        <div style={{ marginBottom: '56px' }}>
          <h3 style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: colors.cream[500], marginBottom: '20px' }}>
            Colors
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            {[
              { name: 'Cream 50',    hex: colors.cream[50],    dark: false },
              { name: 'Cream 100',   hex: colors.cream[100],   dark: false },
              { name: 'Cream 300',   hex: colors.cream[300],   dark: false },
              { name: 'Cream 500',   hex: colors.cream[500],   dark: true  },
              { name: 'Chocolate',   hex: colors.chocolate,    dark: true  },
              { name: 'Mocha',       hex: colors.mocha,        dark: true  },
              { name: 'Rose',        hex: colors.rose,         dark: true  },
              { name: 'Rose Light',  hex: colors.roseLight,    dark: false },
              { name: 'Gold',        hex: colors.gold,         dark: true  },
              { name: 'Gold Light',  hex: colors.goldLight,    dark: false },
              { name: 'White',       hex: colors.white,        dark: false, border: true },
            ].map((c) => (
              <div key={c.name} style={{ display: 'flex', flexDirection: 'column', gap: '8px', minWidth: '80px' }}>
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '12px',
                    backgroundColor: c.hex,
                    border: c.border ? `1px solid ${colors.cream[200]}` : 'none',
                    boxShadow: shadows.soft,
                  }}
                />
                <span style={{ fontSize: '0.6875rem', fontWeight: 500, color: colors.mocha }}>{c.name}</span>
                <span style={{ fontSize: '0.625rem', fontWeight: 300, color: colors.cream[500], fontFamily: 'monospace' }}>{c.hex}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Typography */}
        <div style={{ marginBottom: '56px' }}>
          <h3 style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: colors.cream[500], marginBottom: '20px' }}>
            Typography
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '32px', backgroundColor: colors.cream[50], borderRadius: '20px', border: `1px solid ${colors.cream[200]}` }}>
            {[
              { label: 'Display', family: "'Fraunces', serif", size: '3rem',     weight: 600, sample: 'Artisan Pâtisserie' },
              { label: 'Heading', family: "'Fraunces', serif", size: '1.75rem',  weight: 600, sample: 'Seasonal Creations' },
              { label: 'Body',    family: "'Outfit', sans-serif", size: '1rem',  weight: 400, sample: "Handcrafted cakes for life's most precious moments." },
              { label: 'Caption', family: "'Outfit', sans-serif", size: '0.75rem', weight: 400, sample: 'ARTISAN · PÂTISSERIE · EST. 2012' },
            ].map((t) => (
              <div key={t.label} style={{ display: 'flex', alignItems: 'baseline', gap: '20px', paddingBottom: '20px', borderBottom: `1px solid ${colors.cream[200]}` }}>
                <span style={{ fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: colors.cream[500], minWidth: '56px' }}>
                  {t.label}
                </span>
                <span style={{ fontFamily: t.family, fontSize: t.size, fontWeight: t.weight, color: colors.chocolate, lineHeight: 1.2 }}>
                  {t.sample}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div style={{ marginBottom: '56px' }}>
          <h3 style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: colors.cream[500], marginBottom: '20px' }}>
            Buttons
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
            <Button variant="primary"   size="md">Primary</Button>
            <Button variant="secondary" size="md" icon={null}>Secondary</Button>
            <Button variant="ghost"     size="md" icon={null}>Ghost</Button>
            <Button variant="gold"      size="md" icon={null}>Gold CTA</Button>
            <Button variant="danger"    size="md" icon={null}>Danger</Button>
            <Button variant="primary"   size="sm">Small</Button>
            <Button variant="primary"   size="lg">Large</Button>
          </div>
        </div>

        {/* Badges & Tags */}
        <div style={{ marginBottom: '56px' }}>
          <h3 style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: colors.cream[500], marginBottom: '20px' }}>
            Badges & Tags
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
            <Badge tone="rose">Bestseller</Badge>
            <Badge tone="gold">Chef Pick</Badge>
            <Badge tone="chocolate">New</Badge>
            <Badge tone="cream">Seasonal</Badge>
            <Badge tone="sage" dot>Available</Badge>
            <Tag>Signature Cakes</Tag>
            <Tag active>Petit Fours</Tag>
          </div>
        </div>

        {/* Shadows */}
        <div>
          <h3 style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: colors.cream[500], marginBottom: '20px' }}>
            Shadows & Gradients
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            {[
              { label: 'Soft',  shadow: shadows.soft },
              { label: 'Card',  shadow: shadows.card },
              { label: 'Lift',  shadow: shadows.lift },
              { label: 'Deep',  shadow: shadows.deep },
            ].map((s) => (
              <div
                key={s.label}
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '16px',
                  backgroundColor: colors.white,
                  boxShadow: s.shadow,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  color: colors.mocha,
                }}
              >
                {s.label}
              </div>
            ))}
            {[
              { label: 'Cream Fade',  bg: gradients.creamFade },
              { label: 'Gold Sheen',  bg: gradients.goldSheen },
              { label: 'Rose Blush',  bg: gradients.roseBlush },
            ].map((g) => (
              <div
                key={g.label}
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '16px',
                  background: g.bg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.6875rem',
                  fontWeight: 500,
                  color: colors.chocolate,
                  textAlign: 'center',
                  padding: '8px',
                }}
              >
                {g.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      <Navbar scrolled={scrolled} />
      <main>
        <HeroSection
          title="Where Cream becomes an Art Form."
          subtitle="Artisan Pâtisserie"
          description="Handcrafted cakes for life's most precious moments. Every layer made with intention, every decoration placed by hand."
          ctaPrimary="Explore Menu"
          ctaSecondary="Our Story"
          imageSrc="https://images.unsplash.com/photo-1711141326113-e6b607fd78ef?w=900&h=1100&fit=crop&auto=format"
          imageAlt="A display case filled with artisan cakes and pastries"
          stats={[
            { value: '12+', label: 'Years of craft' },
            { value: '340+', label: 'Bespoke cakes' },
            { value: '98%', label: 'Happy clients' },
          ]}
          badge="Artisan Pâtisserie"
          badgeLabel="Today's Special"
          badgeIcon={<div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: colors.roseLight, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}>🎂</div>}
        />
        <Marquee />
        <FeaturesSection />
        <MenuSection />
        <StorySection />
        <PricingSection />
        <TestimonialsSection />
        <Locations />
        <Contact />
        <DesignSystemSection />
      </main>
      <Footer />

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (max-width: 767px) {
          section[id="hero"]    { grid-template-columns: 1fr !important; }
          section[id="story"] > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
