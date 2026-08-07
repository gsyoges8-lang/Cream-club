// ─── Cream Club Design System Tokens ─────────────────────────────────────────

// COLOR PALETTE
export const colors = {
  // Cream — warm parchment scale
  cream: {
    50:  '#fdf9f3',  // page background
    100: '#f9f0e1',  // subtle surface
    200: '#f0ddc0',  // borders, dividers
    300: '#e4c898',  // muted borders
    400: '#d4a96a',  // placeholder text
    500: '#c08a42',  // captions, meta
    600: '#a06830',  // secondary text
    700: '#7d4e23',
    800: '#5a3518',
    900: '#3a200e',  // near-black warm
  },

  // Chocolate — primary dark
  chocolate: '#2c1810',
  mocha:     '#4a2c1a',

  // Rose — accent, tags, hover
  rose:      '#d4788a',
  roseLight: '#f5c6cf',
  roseDark:  '#b85c70',

  // Gold — CTA on dark, highlights
  gold:      '#c9a227',
  goldLight: '#f0d98a',
  goldDark:  '#a07d10',

  // Neutrals
  white: '#ffffff',
  black: '#0a0602',
} as const

// TYPOGRAPHY
export const typography = {
  family: {
    display: "'Fraunces', Georgia, serif",
    body:    "'Outfit', system-ui, sans-serif",
  },
  size: {
    xs:   '0.75rem',    // 12px — captions, labels
    sm:   '0.875rem',   // 14px — body small
    base: '1rem',       // 16px — body
    lg:   '1.0625rem',  // 17px — body large
    xl:   '1.25rem',    // 20px — subheading
    '2xl':'1.5rem',     // 24px — heading sm
    '3xl':'2rem',       // 32px — heading md
    '4xl':'2.5rem',     // 40px — heading lg
    '5xl':'3.25rem',    // 52px — display sm
    '6xl':'4rem',       // 64px — display md
    hero: 'clamp(3rem, 6vw, 5.5rem)',
    section: 'clamp(2rem, 4vw, 3.5rem)',
  },
  weight: {
    light:   300,
    regular: 400,
    medium:  500,
    semibold:600,
    bold:    700,
  },
  lineHeight: {
    tight:   1.1,
    snug:    1.25,
    normal:  1.5,
    relaxed: 1.65,
  },
  letterSpacing: {
    tight:  '-0.02em',
    normal: '0',
    wide:   '0.05em',
    wider:  '0.1em',
    widest: '0.2em',
    eyebrow:'0.25em',
  },
} as const

// SPACING — 8px base grid
export const spacing = {
  1:  '8px',
  2:  '16px',
  3:  '24px',
  4:  '32px',
  5:  '40px',
  6:  '48px',
  7:  '56px',
  8:  '64px',
  10: '80px',
  12: '96px',
  16: '128px',
  20: '160px',
} as const

// SHADOWS
export const shadows = {
  soft:  '0 2px 16px rgba(44, 24, 16, 0.08)',
  card:  '0 4px 32px rgba(44, 24, 16, 0.12)',
  lift:  '0 8px 40px rgba(44, 24, 16, 0.18)',
  deep:  '0 16px 64px rgba(44, 24, 16, 0.24)',
  rose:  '0 4px 20px rgba(212,120,138,0.35)',
  gold:  '0 4px 20px rgba(201,162,39,0.40)',
} as const

// GRADIENTS
export const gradients = {
  heroVignette: 'linear-gradient(to right, rgba(253,249,243,0.15) 0%, transparent 40%)',
  splitDark:    `linear-gradient(135deg, ${colors.chocolate} 50%, ${colors.cream[100]} 50%)`,
  creamFade:    `linear-gradient(180deg, ${colors.cream[50]} 0%, ${colors.cream[100]} 100%)`,
  chocolateFade:`linear-gradient(180deg, ${colors.chocolate} 0%, ${colors.mocha} 100%)`,
  goldSheen:    `linear-gradient(135deg, ${colors.gold} 0%, ${colors.goldLight} 50%, ${colors.gold} 100%)`,
  roseBlush:    `linear-gradient(135deg, ${colors.rose} 0%, ${colors.roseLight} 100%)`,
} as const

// BORDER RADIUS
export const radius = {
  sm:   '8px',
  md:   '12px',
  lg:   '16px',
  xl:   '20px',
  '2xl':'24px',
  full: '9999px',
} as const

// BREAKPOINTS
export const breakpoints = {
  sm:  '640px',
  md:  '768px',
  lg:  '1024px',
  xl:  '1280px',
  '2xl':'1536px',
} as const

// TRANSITIONS
export const transitions = {
  fast:   'all 0.15s ease',
  normal: 'all 0.25s ease',
  slow:   'all 0.4s ease',
} as const
