/**
 * zero8.dev design tokens — JS export
 * Mirrors tokens.css. Use for inline styles, chart libs, anything outside CSS.
 */

export const colors = {
  ink: {
    1000: '#0E0E0E',
    900:  '#121212',
    800:  '#1A1A1A',
    700:  '#262626',
    600:  '#3D3D3D',
    500:  '#6B6B6B',
    400:  '#8A8A8A',
    300:  '#A8A8A8',
    200:  '#C9C7C4',
    100:  '#E8E6E3',
    '050': '#F5F2ED',
    '000': '#FFFFFF',
  },
  peach: {
    300: '#FFD4C5',
    400: '#FFB5A0',
    500: '#FFA794', // primary brand
    600: '#E8917F',
    700: '#A66F63',
    900: '#5C3A33',
  },
};

export const fonts = {
  sans:  `'Onest', 'Inter', -apple-system, BlinkMacSystemFont, system-ui, sans-serif`,
  mono:  `'Geist Mono', 'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, Consolas, monospace`,
  serif: `'Newsreader', Georgia, 'Iowan Old Style', serif`,
};

export const spacing = {
  1: '4px', 2: '8px', 3: '12px', 4: '16px', 5: '24px',
  6: '32px', 7: '48px', 8: '64px', 9: '96px', 10: '128px',
};

export const radii = { 0: '0', 1: '4px', 2: '8px', 3: '14px', pill: '9999px' };

export const motion = {
  ease: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
  fast: '120ms',
  base: '200ms',
  slow: '320ms',
};

export const layout = {
  contentWidth: '640px',
  wideWidth:    '720px',
  maxWidth:     '1080px',
};

export const type = {
  scale: { xs: 12, sm: 13, base: 15, md: 17, lg: 20, xl: 24, '2xl': 32, '3xl': 44, '4xl': 60, '5xl': 84 },
  lineHeight: { tight: 1.1, snug: 1.25, base: 1.55, loose: 1.75 },
  tracking:   { tight: '-0.02em', snug: '-0.01em', base: '0', meta: '0.04em' },
};

export default { colors, fonts, spacing, radii, motion, layout, type };
