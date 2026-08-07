# Asset Folder Structure

```
public/
├── images/
│   ├── cakes/          WebP — individual cake product shots (480×560)
│   │   ├── velvet-noir.webp
│   │   ├── strawberry-mirage.webp
│   │   ├── lavender-clouds.webp
│   │   ├── caramel-reverie.webp
│   │   ├── rose-macarons.webp
│   │   └── pistachio-eclairs.webp
│   │
│   ├── hero/           WebP — full-bleed hero images (1800×1100)
│   │   ├── display-case.webp
│   │   └── atelier.webp
│   │
│   └── gallery/        WebP — editorial/story imagery (1200×1600)
│       ├── founder.webp
│       ├── kitchen.webp
│       └── ingredients.webp
│
├── icons/              SVG — UI icons (24×24 viewBox)
│   ├── arrow-right.svg
│   ├── map-pin.svg
│   ├── star.svg
│   ├── heart.svg
│   ├── shopping-bag.svg
│   ├── mail.svg
│   ├── phone.svg
│   ├── instagram.svg
│   ├── leaf.svg
│   └── gift.svg
│
└── logo/               SVG (primary) + PNG fallback
    ├── cream-club.svg          — dark on light
    ├── cream-club-white.svg    — light on dark
    ├── cream-club@2x.png       — 360×120 PNG fallback
    └── favicon.svg             — 32×32 cake slice mark
```

## Export Specs

| Type     | Format | Notes                                  |
|----------|--------|----------------------------------------|
| Photos   | WebP   | quality 85, progressive                |
| Logos    | SVG    | primary; embed fonts as paths          |
| Icons    | SVG    | 24×24 viewBox, 1.5px stroke            |
| Fallback | PNG    | only when SVG unsupported; @2x density |
