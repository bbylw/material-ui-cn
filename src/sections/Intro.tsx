import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import { motion } from 'framer-motion'

export function SectionHead({ overline, title, caption }: { overline: string; title: string; caption?: string }) {
  return (
    <Box sx={{ mb: 5 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
        <Box sx={{ width: 28, height: 1.5, bgcolor: 'secondary.main' }} />
        <Typography
          sx={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: 11,
            letterSpacing: '0.14em',
            fontWeight: 600,
            color: 'secondary.main',
          }}
        >
          {overline}
        </Typography>
      </Box>
      <Typography
        variant="h3"
        component="h2"
        sx={{
          fontSize: { xs: 32, md: 42 },
          maxWidth: 640,
          mb: caption ? 1.25 : 0,
        }}
      >
        {title}
      </Typography>
      {caption && (
        <Typography sx={{ color: 'text.secondary', fontSize: 16, lineHeight: 1.7, maxWidth: 640 }}>{caption}</Typography>
      )}
    </Box>
  )
}

export default function Intro() {
  return (
    <Container id="intro" sx={{ maxWidth: 1400, py: { xs: 7, md: 10 } }}>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '5fr 7fr' }, gap: { xs: 4, md: 6 }, alignItems: 'start' }}>
        <Box
          component={motion.div}
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionHead overline="01 — 介绍" title="什么是 Material UI？" />
          <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, px: 1.25, py: 0.6, borderRadius: 999, border: '1px solid', borderColor: 'divider', bgcolor: 'background.paper', fontSize: 12 }}>
            <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#22C55E' }} />
            Material Design 2 · 生产就绪
          </Box>
        </Box>

        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          sx={{ pt: { md: 1 } }}
        >
          <Typography sx={{ fontSize: { xs: 17, md: 19 }, lineHeight: 1.75, color: 'text.primary', fontWeight: 500, mb: 2 }}>
            实现 Google <Box component="span" sx={{ color: 'secondary.main', fontWeight: 700 }}>Material Design</Box> 的开源 React 组件库。
            内置一整套开箱即用的预构建组件，支持主题定制、深浅色与 TypeScript。
          </Typography>
          <Typography sx={{ fontSize: 15, lineHeight: 1.8, color: 'text.secondary', mb: 2.5 }}>
            Material UI 是一个实现了 Google{' '}
            <Link href="https://m2.material.io/" target="_blank" rel="noopener" sx={{ color: 'secondary.main', fontWeight: 600 }}>
              Material Design
            </Link>{' '}
            规范的开源 React 组件库。它内置了一整套开箱即用、可直接用于生产环境的预构建组件，并提供了丰富的定制选项，让你可以轻松在自己的设计系统之上自由发挥。
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 1.5,
              p: 1.5,
              borderRadius: '16px',
              bgcolor: 'background.paper',
              border: '1px solid',
              borderColor: 'divider',
            }}
          >
            <Box sx={{ p: 1.5 }}>
              <Typography sx={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, fontSize: 14 }}>规范</Typography>
              <Typography sx={{ fontSize: 12, color: 'text.secondary', lineHeight: 1.6 }}>支持 Material Design 2，后续更新见 GitHub</Typography>
            </Box>
            <Box sx={{ p: 1.5, borderLeft: '1px solid', borderColor: 'divider' }}>
              <Typography sx={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, fontSize: 14 }}>社区</Typography>
              <Typography sx={{ fontSize: 12, color: 'text.secondary', lineHeight: 1.6 }}>
                关注{' '}
                <Link href="https://github.com/mui/material-ui/issues/29345" target="_blank" sx={{ fontWeight: 600 }}>
                  GitHub Issue
                </Link>{' '}
                获取设计更新
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  )
}
