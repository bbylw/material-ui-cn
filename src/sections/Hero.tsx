import * as React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Chip from '@mui/material/Chip'
import Slider from '@mui/material/Slider'
import Switch from '@mui/material/Switch'
import Alert from '@mui/material/Alert'
import LinearProgress from '@mui/material/LinearProgress'
import Divider from '@mui/material/Divider'
import Link from '@mui/material/Link'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import { motion } from 'framer-motion'

function Showcase() {
  const [progress, setProgress] = React.useState(66)
  const [compact, setCompact] = React.useState(true)
  const [sync, setSync] = React.useState(false)

  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        width: '100%',
        maxWidth: 440,
        borderRadius: '24px',
        border: '1px solid',
        borderColor: 'divider',
        bgcolor: 'background.paper',
        boxShadow: '0 24px 64px rgba(15,17,16,0.12), 0 1px 0 rgba(255,255,255,0.6) inset',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top rule */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2.5 }}>
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'secondary.main', animation: 'pulse 2s infinite' }} />
          <Typography sx={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, letterSpacing: '0.08em', color: 'text.secondary' }}>
            LIVE PREVIEW
          </Typography>
        </Box>
        <Chip label="v9.4.0" size="small" sx={{ height: 22, fontSize: 11, fontWeight: 600, bgcolor: 'secondary.main', color: '#fff' }} />
      </Box>

      <Stack spacing={2.5}>
        <Stack direction="row" spacing={1}>
          <Button variant="contained" disableElevation sx={{ bgcolor: 'primary.main', flex: 1 }}>
            主要操作
          </Button>
          <Button variant="outlined" sx={{ flex: 1, borderColor: 'divider', color: 'text.primary' }}>
            次要操作
          </Button>
        </Stack>

        <Box sx={{ display: 'flex', gap: 0.75, flexWrap: 'wrap' }}>
          <Chip label="Material Design" size="small" sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', fontWeight: 600 }} />
          <Chip label="开箱即用" size="small" variant="outlined" />
          <Chip label="2,500+ 贡献者" size="small" sx={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11 }} />
        </Box>

        <Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.75 }}>
            <Typography variant="caption" sx={{ fontWeight: 600, letterSpacing: '0.04em' }}>
              构建进度
            </Typography>
            <Typography variant="caption" sx={{ fontFamily: '"JetBrains Mono", monospace', color: 'text.secondary' }}>
              {progress}%
            </Typography>
          </Box>
          <Slider
            value={progress}
            onChange={(_, v) => setProgress(v as number)}
            size="small"
            sx={{
              color: 'secondary.main',
              '& .MuiSlider-thumb': { width: 16, height: 16, border: '3px solid', borderColor: 'background.paper' },
            }}
          />
          <LinearProgress variant="determinate" value={progress} sx={{ height: 4, borderRadius: 999, bgcolor: 'divider', '& .MuiLinearProgress-bar': { bgcolor: 'secondary.main' } }} />
        </Box>

        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
            <Switch size="small" checked={compact} onChange={(e) => setCompact(e.target.checked)} sx={{ '& .MuiSwitch-switchBase.Mui-checked': { color: 'secondary.main' }, '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': { bgcolor: 'secondary.main' } }} />
            <Typography variant="caption" sx={{ fontWeight: 600 }}>紧凑</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
            <Switch size="small" checked={sync} onChange={(e) => setSync(e.target.checked)} />
            <Typography variant="caption" sx={{ fontWeight: 600 }}>主题同步</Typography>
          </Box>
        </Box>

        <Divider />

        <Alert severity="success" variant="outlined" sx={{ borderRadius: '12px', py: 0.5, borderColor: 'secondary.main', bgcolor: 'color-mix(in srgb, var(--mui-palette-secondary-main) 8%, transparent)', color: 'text.primary' }}>
          构建成功！已生成生产环境包。
        </Alert>
      </Stack>
    </Paper>
  )
}

const stats = [
  { value: '2,500+', label: '开源贡献者', sub: 'GitHub Contributors' },
  { value: '90+', label: '生产级组件', sub: 'Production Ready' },
  { value: '2014 —', label: '持续演进', sub: 'Since React 0.13' },
]

export default function Hero() {
  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        bgcolor: 'background.default',
        borderBottom: '1px solid',
        borderColor: 'divider',
        minHeight: { md: '92dvh' },
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Gradient mesh - layered transparencies */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: {
            xs: 'radial-gradient(900px 600px at 85% -10%, color-mix(in srgb, var(--mui-palette-secondary-main) 14%, transparent) 0%, transparent 60%), radial-gradient(700px 500px at -5% 95%, color-mix(in srgb, var(--mui-palette-secondary-main) 8%, transparent) 0%, transparent 55%)',
            md: 'radial-gradient(900px 600px at 85% -10%, color-mix(in srgb, var(--mui-palette-secondary-main) 14%, transparent) 0%, transparent 60%), radial-gradient(700px 500px at -5% 95%, color-mix(in srgb, var(--mui-palette-secondary-main) 8%, transparent) 0%, transparent 55%), linear-gradient(180deg, transparent 0%, color-mix(in srgb, var(--mui-palette-background-paper) 0%, transparent) 100%)',
          },
          pointerEvents: 'none',
        }}
      />
      {/* Hairline grid pattern */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          opacity: 0.04,
          backgroundImage:
            'linear-gradient(var(--mui-palette-divider) 1px, transparent 1px), linear-gradient(90deg, var(--mui-palette-divider) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(800px 500px at 50% 0%, black 40%, transparent 75%)',
        }}
      />

      <Container sx={{ maxWidth: 1400, position: 'relative', py: { xs: 6, md: 8 } }}>
        {/* Eyebrow */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Box sx={{ width: 32, height: 1, bgcolor: 'secondary.main' }} />
            <Typography sx={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, letterSpacing: '0.12em', color: 'secondary.main', fontWeight: 600 }}>
              MATERIAL UI · V9.4.0
            </Typography>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'inline-flex' }, alignItems: 'center', gap: 1, px: 1.25, py: 0.4, borderRadius: 999, bgcolor: 'primary.main', color: 'primary.contrastText', fontSize: 11, fontWeight: 600 }}>
            <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#4ADE80', animation: 'pulse 1.6s infinite' }} />
            MUI X v9 已发布
            <ArrowOutwardIcon sx={{ fontSize: 12 }} />
          </Box>
        </Box>

        {/* Asymmetric grid: editorial 7 / 5 */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '7fr 5fr' }, gap: { xs: 5, lg: 6 }, alignItems: 'center' }}>
          {/* Left: headline */}
          <Box>
            <Typography
              component={motion.h1}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              variant="h1"
              sx={{
                fontSize: { xs: 44, sm: 56, md: 68, lg: 76 },
                lineHeight: 0.9,
                mb: 2.5,
                color: 'text.primary',
              }}
            >
              <Box component="span" sx={{ display: 'block' }}>
                实现 Google
              </Box>
              <Box component="span" sx={{ display: 'block', color: 'secondary.main', fontStyle: 'italic', fontWeight: 500, letterSpacing: '-0.03em' }}>
                Material Design
              </Box>
              <Box component="span" sx={{ display: 'block' }}>
                的 React 库
              </Box>
            </Typography>

            <Typography
              component={motion.p}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              sx={{
                fontSize: { xs: 16, md: 18 },
                lineHeight: 1.7,
                color: 'text.secondary',
                maxWidth: 520,
                mb: 3.5,
                borderLeft: '2px solid',
                borderColor: 'divider',
                pl: 2.5,
              }}
            >
              功能全面、开箱即用，随时可用于生产环境。超过{' '}
              <Box component="span" sx={{ color: 'text.primary', fontWeight: 700 }}>
                2,500 位贡献者
              </Box>{' '}
              打磨，90+ 组件遵循 WAI-ARIA，支持 Theming、深浅色与 TypeScript。
            </Typography>

            <Stack
              component={motion.div}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              direction="row"
              spacing={1.5}
              sx={{ mb: 4, flexWrap: 'wrap', gap: 1.5 }}
            >
              <Button
                href="#installation"
                variant="contained"
                size="large"
                endIcon={<ArrowOutwardIcon />}
                sx={{ px: 3, py: 1.25, bgcolor: 'secondary.main', color: '#fff', '&:hover': { bgcolor: '#C86A4A' } }}
              >
                立即开始
              </Button>
              <Button
                href="#components"
                variant="outlined"
                size="large"
                sx={{ px: 3, py: 1.25, borderColor: 'divider', color: 'text.primary', bgcolor: 'background.paper' }}
              >
                浏览组件
              </Button>
              <Link
                href="https://mui.com/material-ui/getting-started/"
                target="_blank"
                underline="none"
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 0.75,
                  px: 2,
                  fontSize: 13,
                  fontWeight: 600,
                  color: 'text.secondary',
                  '&:hover': { color: 'text.primary' },
                }}
              >
                英文原版 <ArrowOutwardIcon sx={{ fontSize: 14 }} />
              </Link>
            </Stack>

            {/* Stats - editorial inline with rule */}
            <Box
              component={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 0,
                borderTop: '1px solid',
                borderColor: 'divider',
                pt: 2.5,
                maxWidth: 520,
              }}
            >
              {stats.map((s, i) => (
                <Box key={s.label} sx={{ borderRight: i < 2 ? '1px solid' : 'none', borderColor: 'divider', pr: 2, pl: i ? 2 : 0 }}>
                  <Typography sx={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, fontSize: 22, lineHeight: 1, letterSpacing: '-0.02em' }}>
                    {s.value}
                  </Typography>
                  <Typography sx={{ fontSize: 12, fontWeight: 600, color: 'text.primary', mt: 0.5 }}>{s.label}</Typography>
                  <Typography sx={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 10, color: 'text.secondary', letterSpacing: '0.06em' }}>{s.sub}</Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Right: showcase with overlap & float */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20, rotate: 0.5 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            sx={{ position: 'relative', display: 'flex', justifyContent: { xs: 'center', lg: 'flex-end' }, pt: { xs: 2, lg: 0 } }}
          >
            {/* Decorative ring behind */}
            <Box
              sx={{
                position: 'absolute',
                width: 360,
                height: 360,
                borderRadius: '50%',
                border: '1px dashed',
                borderColor: 'divider',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                display: { xs: 'none', md: 'block' },
                opacity: 0.6,
              }}
            />
            <Box
              component={motion.div}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              sx={{ position: 'relative', zIndex: 1 }}
            >
              <Showcase />
            </Box>
            {/* Floating chip */}
            <Paper
              component={motion.div}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              sx={{
                position: 'absolute',
                bottom: 16,
                left: { xs: 8, lg: -12 },
                px: 1.5,
                py: 1,
                borderRadius: '14px',
                display: { xs: 'none', sm: 'flex' },
                alignItems: 'center',
                gap: 1,
                border: '1px solid',
                borderColor: 'divider',
                boxShadow: '0 12px 32px rgba(0,0,0,0.08)',
              }}
            >
              <Box sx={{ width: 28, height: 28, borderRadius: '50%', bgcolor: 'secondary.main', display: 'grid', placeItems: 'center', color: '#fff', fontSize: 14 }}>✦</Box>
              <Box>
                <Typography sx={{ fontSize: 12, fontWeight: 700, lineHeight: 1 }}>TypeScript 友好</Typography>
                <Typography sx={{ fontSize: 11, color: 'text.secondary', lineHeight: 1 }}>开箱即用</Typography>
              </Box>
            </Paper>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
