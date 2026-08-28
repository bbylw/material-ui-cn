import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Link from '@mui/material/Link'
import Chip from '@mui/material/Chip'
import Divider from '@mui/material/Divider'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import CodeIcon from '@mui/icons-material/Code'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import { SectionHead } from './Intro'
import { motion } from 'framer-motion'

const projects = [
  { name: 'Next.js App Router', desc: '首选 SSR，支持 RSC 与流式渲染。', href: 'https://github.com/mui/material-ui/tree/master/examples/material-ui-nextjs-ts', tag: '推荐', hot: true },
  { name: 'Next.js Pages Router', desc: '经典 Pages Router，迁移成本低。', href: 'https://github.com/mui/material-ui/tree/master/examples/material-ui-nextjs-pages-router-ts', tag: '稳定' },
  { name: 'Vite', desc: '轻量 SPA，秒级启动，适合演示与后台。', href: 'https://github.com/mui/material-ui/tree/master/examples/material-ui-vite-ts', tag: '轻量' },
  { name: 'Remix', desc: '全栈框架，嵌套路由与加载器。', href: 'https://github.com/mui/material-ui/tree/master/examples/material-ui-remix-ts', tag: '全栈' },
  { name: 'Vite + Tailwind', desc: 'MUI 与 Tailwind 共存最佳实践。', href: 'https://github.com/mui/material-ui/tree/master/examples/material-ui-vite-tailwind-ts', tag: '样式' },
  { name: 'Express SSR', desc: '服务端渲染，自定义服务器。', href: 'https://github.com/mui/material-ui/tree/master/examples/material-ui-express-ssr', tag: 'SSR' },
]

const templates = [
  { name: '仪表盘', en: 'Dashboard', desc: 'Data Grid + Charts 可视化看板', href: 'https://mui.com/material-ui/getting-started/templates/dashboard/' },
  { name: '营销页', en: 'Marketing', desc: '功能、评价、定价、FAQ 完整落地页', href: 'https://mui.com/material-ui/getting-started/templates/marketing-page/' },
  { name: '结账流程', en: 'Checkout', desc: '可定制多步表单', href: 'https://mui.com/material-ui/getting-started/templates/checkout/' },
  { name: '登录', en: 'Sign-in', desc: '适配任意认证提供方', href: 'https://mui.com/material-ui/getting-started/templates/sign-in/' },
  { name: '双栏登录', en: 'Sign-in Side', desc: '品牌内容 + 表单左右分栏', href: 'https://mui.com/material-ui/getting-started/templates/sign-in-side/' },
  { name: '注册', en: 'Sign-up', desc: '与登录页配对的注册页', href: 'https://mui.com/material-ui/getting-started/templates/sign-up/' },
  { name: '博客', en: 'Blog', desc: 'markdown-to-jsx 现代博客首页', href: 'https://mui.com/material-ui/getting-started/templates/blog/' },
  { name: 'CRUD 看板', en: 'CRUD Dashboard', desc: '增删改查 + 可定制侧边栏', href: 'https://mui.com/material-ui/getting-started/templates/crud-dashboard/' },
]

export default function ProjectsAndTemplates() {
  return (
    <>
      <Box id="examples" sx={{ bgcolor: 'background.paper', borderTop: '1px solid', borderColor: 'divider', position: 'relative' }}>
        <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, var(--mui-palette-divider), transparent)' }} />
        <Container sx={{ maxWidth: 1400, py: { xs: 7, md: 10 } }}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'end', gap: 2, mb: 4 }}>
            <SectionHead overline="06 — 示例项目" title="官方集成示例" caption="零初始配置，直接开写。Bun + Vite 最轻量，Next.js 最全能。" />
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 4 }}>
              <Box sx={{ px: 1, py: 0.4, borderRadius: 999, border: '1px solid', borderColor: 'divider', fontFamily: '"JetBrains Mono", monospace', fontSize: 11 }}>6 OFFICIAL</Box>
            </Box>
          </Box>

          {/* Asymmetric: first card larger */}
          <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 2 }}>
            {projects.map((p, i) => (
              <Paper
                key={p.name}
                component={motion.a}
                href={p.href}
                target="_blank"
                rel="noopener"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                variant="outlined"
                sx={{
                  p: 2.5,
                  borderRadius: '20px',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1,
                  gridColumn: {
                    xs: 'span 12',
                    sm: i === 0 ? 'span 12' : 'span 6',
                    md: i === 0 ? 'span 5' : i === 1 ? 'span 7' : 'span 4',
                  },
                  position: 'relative',
                  overflow: 'hidden',
                  bgcolor: p.hot ? 'primary.main' : 'background.default',
                  color: p.hot ? 'primary.contrastText' : 'text.primary',
                  borderColor: p.hot ? 'primary.main' : 'divider',
                  '&:hover': { transform: 'translateY(-3px)', boxShadow: '0 16px 32px rgba(15,17,16,0.08)' },
                  transition: 'all 220ms cubic-bezier(0.16,1,0.3,1)',
                  ...(p.hot && {
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      width: 220,
                      height: 220,
                      right: -60,
                      top: -60,
                      borderRadius: '50%',
                      background: 'radial-gradient(circle, rgba(217,119,87,0.28) 0%, transparent 70%)',
                    },
                  }),
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box sx={{ width: 28, height: 28, borderRadius: '8px', bgcolor: p.hot ? 'secondary.main' : 'background.paper', color: p.hot ? '#fff' : 'secondary.main', display: 'grid', placeItems: 'center', border: '1px solid', borderColor: p.hot ? 'transparent' : 'divider' }}>
                    <CodeIcon sx={{ fontSize: 16 }} />
                  </Box>
                  <Typography sx={{ fontWeight: 700, fontSize: 14, flex: 1, fontFamily: '"Space Grotesk", sans-serif' }}>{p.name}</Typography>
                  <Chip label={p.tag} size="small" sx={{ height: 20, fontSize: 10, fontWeight: 700, letterSpacing: '0.06em', bgcolor: p.hot ? 'secondary.main' : 'background.paper', color: p.hot ? '#fff' : 'text.secondary', border: p.hot ? 'none' : '1px solid', borderColor: 'divider' }} />
                </Box>
                <Typography sx={{ fontSize: 12.5, lineHeight: 1.6, color: p.hot ? 'primary.contrastText' : 'text.secondary', opacity: p.hot ? 0.78 : 1, flex: 1 }}>{p.desc}</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: p.hot ? 'primary.contrastText' : 'secondary.main', fontWeight: 700, fontSize: 12, mt: 0.5 }}>
                  查看源码 <OpenInNewIcon sx={{ fontSize: 14 }} />
                </Box>
              </Paper>
            ))}
          </Box>
        </Container>
      </Box>

      <Container id="templates" sx={{ maxWidth: 1400, py: { xs: 7, md: 10 } }}>
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: 1 }}>
          <SectionHead overline="07 — 模板" title="免费模板" caption="浅/深色 + Material 2 / 自定义主题。区块化布局，可按段复用。" />
        </Box>

        {/* Editorial 8-grid with varied spans */}
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 2 }}>
          {templates.map((t, i) => (
            <Paper
              key={t.name}
              component={motion.a}
              href={t.href}
              target="_blank"
              rel="noopener"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.05 }}
              variant="outlined"
              sx={{
                p: 2.5,
                borderRadius: '20px',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: 0.75,
                gridColumn: {
                  xs: 'span 12',
                  sm: 'span 6',
                  md: i < 2 ? 'span 6' : 'span 3',
                },
                bgcolor: i === 0 ? 'secondary.main' : 'background.paper',
                color: i === 0 ? '#fff' : 'text.primary',
                borderColor: i === 0 ? 'secondary.main' : 'divider',
                '&:hover': { transform: 'translateY(-3px)', boxShadow: '0 14px 30px rgba(15,17,16,0.08)' },
                transition: 'all 220ms',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography sx={{ fontWeight: 700, fontSize: 14, fontFamily: '"Space Grotesk", sans-serif' }}>{t.name}</Typography>
                <Typography sx={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 10, letterSpacing: '0.08em', opacity: i === 0 ? 0.7 : 0.6 }}>{t.en.toUpperCase()}</Typography>
              </Box>
              {i === 0 && <AutoAwesomeIcon sx={{ fontSize: 18, opacity: 0.9, mt: 0.5 }} />}
              <Typography sx={{ fontSize: 12.5, lineHeight: 1.6, color: i === 0 ? 'rgba(255,255,255,0.88)' : 'text.secondary', flex: 1 }}>{t.desc}</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: i === 0 ? '#fff' : 'secondary.main', fontWeight: 700, fontSize: 11, mt: 0.75 }}>
                实时预览 <OpenInNewIcon sx={{ fontSize: 13 }} />
              </Box>
            </Paper>
          ))}
        </Box>

        <Divider sx={{ my: 4 }} />
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 2 }}>
          <Typography sx={{ fontSize: 12.5, color: 'text.secondary' }}>
            需要更完整的主题？前往{' '}
            <Link href="https://mui.com/store/" target="_blank" sx={{ color: 'secondary.main', fontWeight: 700, textDecoration: 'none', borderBottom: '1px solid', borderColor: 'secondary.main' }}>
              MUI Store 模板商店
            </Link>{' '}
            查看付费主题。
          </Typography>
          <Box sx={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, color: 'text.secondary' }}>8 FREE · LIGHT & DARK</Box>
        </Box>
      </Container>
    </>
  )
}
