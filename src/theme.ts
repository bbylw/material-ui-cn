import { createTheme } from '@mui/material/styles'

// Editorial palette — avoids AI blue/purple default
// Light: warm paper #FFFBF5 / ink #141413 / accent terracotta #D97757
// Dark: graphite #0F1110 / surface #1B1E1C / muted moss

const theme = createTheme({
  cssVariables: { colorSchemeSelector: 'class' },
  colorSchemes: {
    light: {
      palette: {
        primary: { main: '#141413', contrastText: '#FFFBF5' },
        secondary: { main: '#D97757' },
        error: { main: '#C0452A' },
        background: { default: '#FFFBF5', paper: '#FFFFFF' },
        divider: '#E8E6DC',
        text: { primary: '#141413', secondary: '#6B6B63' },
      },
    },
    dark: {
      palette: {
        primary: { main: '#F0EDE6', contrastText: '#0F1110' },
        secondary: { main: '#E8A082' },
        error: { main: '#E85D3F' },
        background: { default: '#0F1110', paper: '#1B1E1C' },
        divider: '#2A2E2B',
        text: { primary: '#F0EDE6', secondary: '#9CA3A0' },
      },
    },
  },
  typography: {
    fontFamily: [
      '"DM Sans"',
      '"Noto Sans SC"',
      'system-ui',
      'sans-serif',
    ].join(','),
    h1: {
      fontFamily: '"Space Grotesk", "Noto Sans SC", sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.04em',
      lineHeight: 0.92,
    },
    h2: {
      fontFamily: '"Space Grotesk", "Noto Sans SC", sans-serif',
      fontWeight: 600,
      letterSpacing: '-0.03em',
      lineHeight: 0.95,
    },
    h3: {
      fontFamily: '"Space Grotesk", "Noto Sans SC", sans-serif',
      fontWeight: 600,
      letterSpacing: '-0.02em',
    },
    h4: {
      fontFamily: '"Space Grotesk", "Noto Sans SC", sans-serif',
      fontWeight: 600,
      letterSpacing: '-0.015em',
    },
    button: { textTransform: 'none', fontWeight: 600, letterSpacing: '-0.01em' },
  },
  shape: { borderRadius: 20 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingInline: 22,
          transition: 'transform 150ms cubic-bezier(0.16,1,0.3,1), box-shadow 150ms',
          '&:active': { transform: 'scale(0.98)' },
        },
        contained: {
          boxShadow: 'none',
          '&:hover': { boxShadow: '0 8px 24px rgba(20,20,19,0.12)' },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: { backgroundImage: 'none' },
      },
    },
  },
})

export default theme
