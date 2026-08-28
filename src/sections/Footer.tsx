import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import IconButton from '@mui/material/IconButton'
import Divider from '@mui/material/Divider'
import GitHubIcon from '@mui/icons-material/GitHub'
import XIcon from '@mui/icons-material/X'
import YouTubeIcon from '@mui/icons-material/YouTube'
import RssFeedIcon from '@mui/icons-material/RssFeed'

const footerLinks = [
  { label: '博客', href: 'https://mui.com/blog/' },
  { label: '模板商店', href: 'https://mui.com/store/' },
  { label: '设计套件', href: 'https://mui.com/design-kits/' },
  { label: '英文文档', href: 'https://mui.com/material-ui/getting-started/' },
]

export default function Footer() {
  return (
    <Box component="footer" sx={{ borderTop: '1px solid', borderColor: '#1F2421', bgcolor: '#0F1110', color: '#E8E6DC' }}>
      <Container sx={{ maxWidth: 1400, py: 6 }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1.2fr 0.8fr' }, gap: 4, alignItems: 'start' }}>
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
              <Box sx={{ width: 32, height: 32, borderRadius: '10px', bgcolor: '#fff', color: 'primary.main', display: 'grid', placeItems: 'center', fontWeight: 800, fontFamily: '"Space Grotesk", sans-serif' }}>M</Box>
              <Box>
                <Typography sx={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, fontSize: 14, lineHeight: 1 }}>Material UI 中文站</Typography>
                <Typography sx={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 10, opacity: 0.6, letterSpacing: '0.08em' }}>EDITORIAL · v9.4.0</Typography>
              </Box>
            </Box>
            <Typography sx={{ fontSize: 13, lineHeight: 1.7, opacity: 0.78, maxWidth: 420 }}>
              本站为学习演示项目，内容参考{' '}
              <Box component="a" href="https://mui.com/material-ui/getting-started/" target="_blank" rel="noopener" sx={{ color: '#fff', textDecoration: 'underline', textUnderlineOffset: 3 }}>
                mui.com 官方文档
              </Box>{' '}
              ，由 Material UI 驱动。采用 Editorial 风格重塑，遵循前端设计规范。
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, mt: 2.5, flexWrap: 'wrap' }}>
              <Box sx={{ px: 1.25, py: 0.4, borderRadius: 999, border: '1px solid rgba(255,255,255,0.18)', fontFamily: '"JetBrains Mono", monospace', fontSize: 11 }}>Bun · Vite · React 19</Box>
              <Box sx={{ px: 1.25, py: 0.4, borderRadius: 999, bgcolor: 'secondary.main', color: '#fff', fontSize: 11, fontWeight: 700 }}>© {new Date().getFullYear()}</Box>
            </Box>
          </Box>

          <Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, justifyContent: { md: 'flex-end' } }}>
              {footerLinks.map((l) => (
                <Link key={l.label} href={l.href} target="_blank" rel="noopener" underline="none" sx={{ color: 'rgba(255,255,255,0.8)', fontSize: 13, fontWeight: 500, '&:hover': { color: '#fff' } }}>
                  {l.label}
                </Link>
              ))}
            </Box>
            <Box sx={{ display: 'flex', gap: 0.75, justifyContent: { md: 'flex-end' }, mt: 2 }}>
              <IconButton size="small" aria-label="GitHub" href="https://github.com/mui/material-ui" target="_blank" sx={{ width: 36, height: 36, border: '1px solid rgba(255,255,255,0.18)', color: '#fff' }}>
                <GitHubIcon sx={{ fontSize: 16 }} />
              </IconButton>
              <IconButton size="small" aria-label="X" href="https://x.com/MUI_hq" target="_blank" sx={{ width: 36, height: 36, border: '1px solid rgba(255,255,255,0.18)', color: '#fff' }}>
                <XIcon sx={{ fontSize: 16 }} />
              </IconButton>
              <IconButton size="small" aria-label="YouTube" href="https://www.youtube.com/@MUI_hq" target="_blank" sx={{ width: 36, height: 36, border: '1px solid rgba(255,255,255,0.18)', color: '#fff' }}>
                <YouTubeIcon sx={{ fontSize: 16 }} />
              </IconButton>
              <IconButton size="small" aria-label="RSS" href="https://mui.com/feed/blog/rss.xml" target="_blank" sx={{ width: 36, height: 36, border: '1px solid rgba(255,255,255,0.18)', color: '#fff' }}>
                <RssFeedIcon sx={{ fontSize: 16 }} />
              </IconButton>
            </Box>
            <Typography sx={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 10, opacity: 0.5, letterSpacing: '0.08em', textAlign: { md: 'right' }, mt: 1.5 }}>
              DESIGNED FOR CLARITY · BUILT FOR PRODUCTION
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.12)' }} />
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 1, fontFamily: '"JetBrains Mono", monospace', fontSize: 11, opacity: 0.6 }}>
          <Box>React + TypeScript + Vite + Bun · Framer Motion</Box>
          <Box>WCAG 2.1 · prefers-reduced-motion ✓ · 键盘可达 ✓</Box>
        </Box>
      </Container>
    </Box>
  )
}
