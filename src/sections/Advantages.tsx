import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import PaletteIcon from '@mui/icons-material/Palette'
import Diversity3Icon from '@mui/icons-material/Diversity3'
import VerifiedIcon from '@mui/icons-material/Verified'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import { SectionHead } from './Intro'
import { motion } from 'framer-motion'

const advantages = [
  {
    icon: <RocketLaunchIcon sx={{ fontSize: 18 }} />,
    num: '01',
    title: '更快交付',
    body: '超过 2,500 位贡献者打磨。专注业务逻辑，UI 交给我们。',
    span: 7,
    accent: true,
  },
  {
    icon: <AutoAwesomeIcon sx={{ fontSize: 18 }} />,
    num: '02',
    title: '默认即美观',
    body: '严谨遵循 Material Design，细节兼顾优雅与功能。',
    span: 5,
  },
  {
    icon: <PaletteIcon sx={{ fontSize: 18 }} />,
    num: '03',
    title: '高度可定制',
    body: 'Theme、sx、styled、CSS variables 多层定制能力。',
    span: 4,
  },
  {
    icon: <Diversity3Icon sx={{ fontSize: 18 }} />,
    num: '04',
    title: '跨团队协作',
    body: '直观的 DX，设计与开发共用同一套语言。',
    span: 4,
  },
  {
    icon: <VerifiedIcon sx={{ fontSize: 18 }} />,
    num: '05',
    title: '备受信赖',
    body: '始于 2014，与 React 同步演进，长期维护。',
    span: 4,
  },
]

export default function Advantages() {
  return (
    <Box
      id="advantages"
      sx={{
        bgcolor: 'background.paper',
        borderTop: '1px solid',
        borderBottom: '1px solid',
        borderColor: 'divider',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle diagonal rule */}
      <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, var(--mui-palette-divider), transparent)', opacity: 0.6 }} />

      <Container sx={{ maxWidth: 1400, py: { xs: 7, md: 10 } }}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'end', gap: 2, mb: 5 }}>
          <SectionHead overline="02 — 核心优势" title="为何选择 Material UI" caption="把重复工作交给社区，把创造留给自己。" />
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, fontFamily: '"JetBrains Mono", monospace', fontSize: 11, color: 'text.secondary', letterSpacing: '0.08em', mb: 1 }}>
            <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: 'secondary.main' }} /> 5 REASONS
          </Box>
        </Box>

        {/* Bento grid — 12 cols, varied spans avoids 3-col equal rows */}
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 2 }}>
          {advantages.map((a, i) => (
            <Paper
              key={a.title}
              component={motion.div}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              variant="outlined"
              sx={{
                gridColumn: { xs: 'span 12', sm: `span ${a.span === 4 ? 6 : a.span === 5 ? 6 : 12}`, md: `span ${a.span}` },
                p: 3,
                borderRadius: '20px',
                borderColor: a.accent ? 'secondary.main' : 'divider',
                bgcolor: a.accent ? 'primary.main' : 'background.default',
                color: a.accent ? 'primary.contrastText' : 'text.primary',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                gap: 1.25,
                transition: 'transform 260ms cubic-bezier(0.16,1,0.3,1), box-shadow 260ms',
                '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 16px 40px rgba(15,17,16,0.10)' },
                ...(a.accent && {
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    width: 180,
                    height: 180,
                    right: -40,
                    top: -40,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle at center, rgba(217,119,87,0.22) 0%, transparent 70%)',
                  },
                }),
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box
                  sx={{
                    width: 36,
                    height: 36,
                    borderRadius: '10px',
                    display: 'grid',
                    placeItems: 'center',
                    bgcolor: a.accent ? 'secondary.main' : 'background.paper',
                    color: a.accent ? '#fff' : 'secondary.main',
                    border: '1px solid',
                    borderColor: a.accent ? 'transparent' : 'divider',
                  }}
                >
                  {a.icon}
                </Box>
                <Typography sx={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, color: a.accent ? 'primary.contrastText' : 'text.secondary', opacity: a.accent ? 0.6 : 1, letterSpacing: '0.1em' }}>{a.num}</Typography>
              </Box>
              <Typography sx={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, fontSize: 18, letterSpacing: '-0.02em' }}>{a.title}</Typography>
              <Typography sx={{ fontSize: 13.5, lineHeight: 1.7, color: a.accent ? 'primary.contrastText' : 'text.secondary', opacity: a.accent ? 0.82 : 1 }}>{a.body}</Typography>
            </Paper>
          ))}

          {/* CTA card — editorial, not equal */}
          <Paper
            component={motion.div}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.32 }}
            sx={{
              gridColumn: { xs: 'span 12', sm: 'span 6', md: 'span 12' },
              p: 3,
              borderRadius: '20px',
              bgcolor: 'secondary.main',
              color: '#fff',
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1.4fr auto' },
              gap: 2,
              alignItems: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <Box>
              <Typography sx={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, fontSize: 20, letterSpacing: '-0.02em' }}>从现在开始</Typography>
              <Typography sx={{ fontSize: 13, opacity: 0.9, mt: 0.5, maxWidth: 560, lineHeight: 1.6 }}>
                几条命令即可将 Material UI 添加到你的项目中。支持 Bun / npm / pnpm / yarn。
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, flexWrap: 'wrap' }}>
              <Box
                component="code"
                sx={{
                  px: 1.5,
                  py: 0.9,
                  borderRadius: 999,
                  bgcolor: 'rgba(0,0,0,0.18)',
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: 12,
                  whiteSpace: 'nowrap',
                }}
              >
                bun add @mui/material @emotion/react
              </Box>
              <Box component="a" href="#installation" sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.5, color: '#fff', fontWeight: 700, fontSize: 13, textDecoration: 'none' }}>
                去安装 <ArrowOutwardIcon sx={{ fontSize: 16 }} />
              </Box>
            </Box>
          </Paper>
        </Box>
      </Container>
    </Box>
  )
}
