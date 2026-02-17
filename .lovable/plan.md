

## Redesigned Bento Grid Section

Replace the current `BentoGrid.tsx` with a premium, dark-themed glassmorphism bento grid using a 12-column CSS Grid layout with a subtle 3D tilted-plane perspective effect.

### Layout

The grid uses a 12-column system with `grid-auto-flow: dense`:

```text
Desktop (md+):
+-------------------------------+---------------+
|  VX-1 Silicon Architecture    |  16.0 GB/s    |
|  (6 cols, 2 rows)             |  Neural       |
|                               |  Throughput   |
|                               |  (3 cols)     |
+-------------------------------+---------------+
                                |  2.0 GHz      |
                                |  Hardware     |
                                |  Sign-off     |
                                |  (3 cols)     |
+-------------------------------+---------------+
|  Digital Workforce Status     |
|  (3 cols, 2 rows)             |
+-------------------------------+
```

Mobile: All tiles stack to full-width single column.

### Visual Design

- **Background**: Deep charcoal (`bg-zinc-950`) section background
- **Tiles**: Glassmorphism effect -- `bg-white/5 backdrop-blur-xl border border-white/10`
- **Hover glow**: Each tile gets a colored `drop-shadow` on hover using brand accent colors (blue, yellow, green, red)
- **Icons**: Lucide icons (Cpu, Zap, Activity, Shield) rendered inside 20%-opacity circular backgrounds
- **3D effect**: Container wrapped with `perspective: 1200px` and a subtle `rotateX(2deg) rotateY(-1deg)` transform
- **Font**: Space Grotesk imported via Google Fonts for headings; subtext uses `leading-relaxed`

### Tile Details

1. **Tile 1 (Main Feature -- 6 cols x 2 rows)**: "VX-1 Silicon Architecture" with Cpu icon, description text, and the FPGA image as a subtle background overlay
2. **Tile 2 (Metric -- 3 cols x 1 row)**: Big animated counter "16.0 GB/s" with Zap icon, label "Neural Throughput"
3. **Tile 3 (Metric -- 3 cols x 1 row)**: Big animated counter "2.0 GHz" with Activity icon, label "Hardware Sign-off"
4. **Tile 4 (Interactive -- 3 cols x 2 rows)**: "Digital Workforce Status" with Shield icon and an animated pulsing green dot indicating active AI agents

### Animations

- Scroll-triggered entry using Framer Motion (`whileInView`)
- Animated counters tied to scroll progress (existing `useScrollProgress` hook)
- Pulsing green dot using a CSS `pulse` keyframe animation (already exists in tailwind config)

### Technical Details

**Files to modify:**
- `src/components/BentoGrid.tsx` -- Complete rewrite with new layout, glassmorphism tiles, 12-col grid, 3D perspective wrapper
- `tailwind.config.ts` -- Add Space Grotesk to fontFamily, add a `pulse-dot` keyframe for the active status indicator
- `index.html` -- Add Google Fonts link for Space Grotesk

**Dependencies:** No new packages needed. Uses existing `framer-motion`, `lucide-react`, and `@/hooks/useScrollProgress`.

