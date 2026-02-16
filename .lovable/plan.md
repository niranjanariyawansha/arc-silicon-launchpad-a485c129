

## Update Meta Tags, Remove Lovable References, and Clean Up Hero Section

### 1. Replace All Lovable References in `index.html`

**Open Graph and Twitter images** currently point to `https://lovable.dev/opengraph-image-p98pqg.png`. These will be replaced with the user's logo URL:
`https://mgkmrpukioiljnrhwfli.supabase.co/storage/v1/object/public/front_end_web/basci_components/logo.jpg`

- Remove the `<!-- TODO -->` comment on line 7
- Update `og:image` (line 23) to point to the user's logo
- Update `twitter:image` (line 27) to point to the user's logo
- Update the Organization structured data `logo` field (line 36) to point to the user's logo

### 2. Remove Text Below "ASC -- Advanced Silicon Cores" in Hero Section

In `src/components/HeroSection.tsx`, remove the paragraph (lines 63-71) that reads:

> "Advanced Silicon Cores (ASC) is architecting the world's fastest JSON structural scanners. Verified at 1.0 GHz for 16nm and 7nm ASIC targets."

This will leave the hero with just:
- The 3D floating logo
- "ASC -- Advanced Silicon Cores" heading
- "The Deterministic Standard." scroll-fill text
- The signature text "Silicon, Redefined"
- The two CTA buttons

### Technical Details

**Files to modify:**
- `index.html` -- Update 3 meta tag image URLs, update structured data logo, remove TODO comment
- `src/components/HeroSection.tsx` -- Remove the descriptive paragraph (lines 63-71)

