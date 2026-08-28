import * as React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Divider from '@mui/material/Divider'
import Link from '@mui/material/Link'
import Chip from '@mui/material/Chip'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { SectionHead } from './Intro'
import { motion } from 'framer-motion'

const faqs = [
  { q: 'Material UI 与 MUI 的关系？', a: 'MUI 是品牌，Material UI 是其开源 React 组件库；另有 MUI X（Data Grid / Date Picker）、Toolpad 等产品，统一在 mui.com。' },
  { q: '支持哪些 React 版本？', a: 'peerDependencies 为 ^17 || ^18 || ^19。React 18 及以下需固定 react-is 到对应版本，避免 prop-type 校验报错。' },
  { q: '默认样式引擎是什么？能否用 Tailwind / styled-components？', a: '默认 Emotion。可用 styled-components（@mui/styled-engine-sc）或与 Tailwind 共存（见 Vite + Tailwind 示例）。SSR 强烈建议 Emotion。' },
  { q: '如何自定义主题与组件样式？', a: 'createTheme + ThemeProvider 定义调色/排版/阴影；组件层可用 sx、styled()、theme overrides 或 CSS variables。' },
  { q: '有无 Figma 设计资源？', a: '有。官方提供 Material UI for Figma 社区文件，Duplicated 即可获得全部组件与令牌。' },
  { q: '如何提问与反馈？', a: '先查文档与 GitHub Discussions；Bug 提 Issue 并附最小复现；亦可在 Stack Overflow（material-ui 标签）求助。' },
]

const platforms = [
  { k: '浏览器', v: '最新两版 Chrome / Firefox / Safari / Edge；移动端 iOS Safari / Chrome' },
  { k: '无障碍', v: '遵循 WAI-ARIA，键盘可达，支持高对比与屏幕阅读器' },
  { k: '国际化', v: '内置 40+ 语言包，支持 RTL 布局' },
  { k: 'SSR', v: '支持 Next.js / Remix / Gatsby，需注意 Emotion 缓存注水' },
]

export default function Faq() {
  const [expanded, setExpanded] = React.useState<string | false>('panel0')

  return (
    <Box id="faq" sx={{ bgcolor: 'background.paper', borderTop: '1px solid', borderColor: 'divider', position: 'relative' }}>
      <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, var(--mui-palette-divider), transparent)' }} />
      <Container sx={{ maxWidth: 1400, py: { xs: 7, md: 10 } }}>
        <SectionHead overline="08 — 常见问题" title="FAQ 与支持" caption="找不到答案？去官方文档或 GitHub 提问。" />

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '7.5fr 4.5fr' }, gap: 4, alignItems: 'start' }}>
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {faqs.map((f, i) => (
              <Accordion
                key={f.q}
                expanded={expanded === `panel${i}`}
                onChange={(_, v) => setExpanded(v ? `panel${i}` : false)}
                variant="outlined"
                sx={{
                  borderRadius: '14px !important',
                  mb: 1,
                  borderColor: expanded === `panel${i}` ? 'secondary.main' : 'divider',
                  '&:before': { display: 'none' },
                  overflow: 'hidden',
                  '&.Mui-expanded': { boxShadow: '0 10px 24px rgba(15,17,16,0.06)' },
                }}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: expanded === `panel${i}` ? 'secondary.main' : 'text.secondary' }} />}>
                  <Typography sx={{ fontWeight: 700, fontSize: 14, fontFamily: '"Space Grotesk", sans-serif' }}>{f.q}</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ pt: 0 }}>
                  <Typography sx={{ fontSize: 13.5, lineHeight: 1.75, color: 'text.secondary' }}>{f.a}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
            <Typography sx={{ fontSize: 11, color: 'text.secondary', mt: 2, fontFamily: '"JetBrains Mono", monospace' }}>
              更多见{' '}
              <Link href="https://mui.com/material-ui/getting-started/faq/" target="_blank" sx={{ color: 'secondary.main', fontWeight: 700 }}>
                官方 FAQ
              </Link>
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, position: { lg: 'sticky' }, top: { lg: 96 } }}>
            <Paper variant="outlined" sx={{ p: 2.5, borderRadius: '20px' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
                <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: 'secondary.main' }} />
                <Typography sx={{ fontWeight: 700, fontSize: 13, letterSpacing: '0.06em', fontFamily: '"JetBrains Mono", monospace' }}>支持的平台</Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.25 }}>
                {platforms.map((p) => (
                  <Box key={p.k} sx={{ display: 'flex', gap: 1.25, alignItems: 'start', py: 0.75, borderBottom: '1px solid', borderColor: 'divider', '&:last-of-type': { borderBottom: 'none' } }}>
                    <Chip label={p.k} size="small" sx={{ flexShrink: 0, fontWeight: 700, fontSize: 11, height: 22, borderRadius: '8px' }} />
                    <Typography sx={{ fontSize: 12.5, color: 'text.secondary', lineHeight: 1.6 }}>{p.v}</Typography>
                  </Box>
                ))}
              </Box>
              <Divider sx={{ my: 2 }} />
              <Typography sx={{ fontSize: 12.5, color: 'text.secondary', lineHeight: 1.8 }}>
                需要帮助？
                <br />· <Link href="https://github.com/mui/material-ui/issues" target="_blank" sx={{ fontWeight: 600 }}>GitHub Issues</Link>
                <br />· <Link href="https://mui.com/material-ui/getting-started/support/" target="_blank" sx={{ fontWeight: 600 }}>官方支持页</Link>
                <br />· Stack Overflow{' '}
                <Box
                  component="code"
                  sx={{ px: 0.6, py: 0.2, borderRadius: 0.75, bgcolor: 'background.default', border: '1px solid', borderColor: 'divider', fontFamily: '"JetBrains Mono", monospace', fontSize: 11 }}
                >
                  material-ui
                </Box>
              </Typography>
            </Paper>

            <Paper
              sx={{
                p: 2.5,
                borderRadius: '20px',
                bgcolor: 'primary.main',
                color: 'primary.contrastText',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <Box sx={{ position: 'absolute', width: 160, height: 160, right: -40, top: -40, borderRadius: '50%', background: 'radial-gradient(circle, rgba(217,119,87,0.28) 0%, transparent 70%)' }} />
              <Typography sx={{ fontWeight: 700, fontSize: 14, position: 'relative' }}>版本 v9.4.0</Typography>
              <Typography sx={{ fontSize: 12.5, opacity: 0.88, mt: 0.75, lineHeight: 1.6, position: 'relative' }}>
                查看{' '}
                <Box component="a" href="https://github.com/mui/material-ui/releases" target="_blank" rel="noopener" sx={{ color: '#fff', textDecoration: 'underline', textUnderlineOffset: 3 }}>
                  发布日志
                </Box>{' '}
                与{' '}
                <Box component="a" href="https://mui.com/material-ui/migration/migration-v5/" target="_blank" rel="noopener" sx={{ color: '#fff', textDecoration: 'underline', textUnderlineOffset: 3 }}>
                  迁移指南
                </Box>
                。
              </Typography>
            </Paper>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
