import * as React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import ToggleButton from '@mui/material/ToggleButton'
import Alert from '@mui/material/Alert'
import Divider from '@mui/material/Divider'
import Link from '@mui/material/Link'
import { SectionHead } from './Intro'
import { motion } from 'framer-motion'

export default function Usage() {
  const [variant, setVariant] = React.useState<'contained' | 'outlined' | 'text'>('contained')

  return (
    <Box
      id="usage"
      sx={{
        bgcolor: 'background.paper',
        borderTop: '1px solid',
        borderBottom: '1px solid',
        borderColor: 'divider',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top rule */}
      <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, var(--mui-palette-divider), transparent)' }} />

      <Container sx={{ maxWidth: 1400, py: { xs: 7, md: 10 } }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '5fr 7fr' }, gap: { xs: 4, lg: 5 }, alignItems: 'start' }}>
          <Box
            component={motion.div}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            sx={{ position: { lg: 'sticky' }, top: { lg: 96 } }}
          >
            <SectionHead overline="04 — 用法" title="快速上手" caption="安装后直接引入组件，几分钟内渲染你的第一个按钮。下方可实时切换 variant。" />
            <Box sx={{ mt: 2, display: 'flex', gap: 1, alignItems: 'center', fontFamily: '"JetBrains Mono", monospace', fontSize: 11, color: 'text.secondary', letterSpacing: '0.06em' }}>
              <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#22C55E' }} /> LIVE EDITABLE
            </Box>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
            {/* Live demo + code — split but asymmetric: demo 1.1fr code 0.9fr */}
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1.05fr 0.95fr' }, gap: 2 }}>
              {/* Live demo */}
              <Paper
                component={motion.div}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                variant="outlined"
                sx={{ p: 2.5, borderRadius: '20px', display: 'flex', flexDirection: 'column', gap: 2 }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Typography sx={{ fontWeight: 700, fontSize: 13, letterSpacing: '0.06em', fontFamily: '"JetBrains Mono", monospace' }}>实时预览</Typography>
                  <ToggleButtonGroup
                    size="small"
                    exclusive
                    value={variant}
                    onChange={(_, v) => v && setVariant(v)}
                    sx={{
                      bgcolor: 'background.default',
                      borderRadius: 999,
                      p: 0.35,
                      border: '1px solid',
                      borderColor: 'divider',
                      '& .MuiToggleButton-root': { border: 'none', borderRadius: 999, px: 1.25, py: 0.4, fontSize: 11, fontWeight: 700, textTransform: 'none' },
                      '& .Mui-selected': { bgcolor: 'primary.main', color: 'primary.contrastText' },
                    }}
                  >
                    <ToggleButton value="contained">contained</ToggleButton>
                    <ToggleButton value="outlined">outlined</ToggleButton>
                    <ToggleButton value="text">text</ToggleButton>
                  </ToggleButtonGroup>
                </Box>

                <Box
                  sx={{
                    flex: 1,
                    display: 'grid',
                    placeItems: 'center',
                    minHeight: 148,
                    borderRadius: '16px',
                    bgcolor: 'background.default',
                    border: '1px dashed',
                    borderColor: 'divider',
                    p: 3,
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <Box sx={{ position: 'absolute', inset: 0, opacity: 0.03, backgroundImage: 'radial-gradient(circle at 1px 1px, var(--mui-palette-text-primary) 1px, transparent 0)', backgroundSize: '14px 14px' }} />
                  <Button variant={variant} size="large" sx={{ position: 'relative' }}>
                    Hello world
                  </Button>
                </Box>
                <Typography sx={{ fontSize: 11, color: 'text.secondary', textAlign: 'center', fontFamily: '"JetBrains Mono", monospace' }}>
                  切换上方 variant 试试 → 观察样式变化
                </Typography>
              </Paper>

              {/* Code */}
              <Paper
                variant="outlined"
                sx={{
                  p: 2.5,
                  borderRadius: '20px',
                  bgcolor: '#0F1110',
                  borderColor: '#1F2421',
                  color: '#E8E6DC',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1.25,
                  overflow: 'hidden',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box sx={{ display: 'flex', gap: 0.5 }}>
                    <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#FF5F56' }} />
                    <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#FFBD2E' }} />
                    <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#27C93F' }} />
                  </Box>
                  <Typography sx={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, color: '#9CA3AF', ml: 1 }}>ButtonUsage.tsx</Typography>
                </Box>
                <Box
                  component="pre"
                  sx={{
                    m: 0,
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: 12.5,
                    lineHeight: 1.7,
                    overflowX: 'auto',
                    whiteSpace: 'pre',
                  }}
                >
                  <Box component="span" sx={{ color: '#8B9CC2' }}>
                    import
                  </Box>{' '}
                  Button{' '}
                  <Box component="span" sx={{ color: '#8B9CC2' }}>
                    from
                  </Box>{' '}
                  <Box component="span" sx={{ color: '#E8A082' }}>
                    &apos;@mui/material/Button&apos;
                  </Box>
                  ;{'\n\n'}
                  <Box component="span" sx={{ color: '#8B9CC2' }}>
                    export default function
                  </Box>{' '}
                  ButtonUsage() {'{'}
                  {'\n'}  <Box component="span" sx={{ color: '#8B9CC2' }}>
                    return
                  </Box>{' '}
                  &lt;Button variant=
                  <Box component="span" sx={{ color: '#E8A082' }}>
                    &quot;{variant}&quot;
                  </Box>
                  &gt;Hello world&lt;/Button&gt;;{'\n'}
                  {'}'}
                </Box>
              </Paper>
            </Box>

            {/* Globals — editorial 2-col with rule */}
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2 }}>
              <Paper variant="outlined" sx={{ p: 2.5, borderRadius: '20px', borderLeft: '3px solid', borderLeftColor: 'secondary.main', bgcolor: 'background.default' }}>
                <Typography sx={{ fontWeight: 700, fontSize: 13, fontFamily: '"Space Grotesk", sans-serif' }}>响应式 meta 标签</Typography>
                <Typography sx={{ fontSize: 12.5, color: 'text.secondary', lineHeight: 1.7, mt: 0.75, mb: 1.5 }}>
                  移动优先。请在{' '}
                  <Box component="code" sx={{ px: 0.6, py: 0.2, borderRadius: 0.75, bgcolor: 'background.default', border: '1px solid', borderColor: 'divider', fontFamily: '"JetBrains Mono", monospace', fontSize: 11 }}>
                    {'<head>'}
                  </Box>{' '}
                  中加入：
                </Typography>
                <Box
                  sx={{
                    p: 1.25,
                    borderRadius: '12px',
                    bgcolor: '#0F1110',
                    border: '1px solid #1F2421',
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: 11,
                    color: '#E8E6DC',
                    overflowX: 'auto',
                  }}
                >
                  {'<meta name="viewport" content="initial-scale=1, width=device-width" />'}
                </Box>
              </Paper>

              <Paper variant="outlined" sx={{ p: 2.5, borderRadius: '20px', borderLeft: '3px solid', borderLeftColor: 'divider', bgcolor: 'background.default' }}>
                <Typography sx={{ fontWeight: 700, fontSize: 13, fontFamily: '"Space Grotesk", sans-serif' }}>CssBaseline</Typography>
                <Typography sx={{ fontSize: 12.5, color: 'text.secondary', lineHeight: 1.7, mt: 0.75, mb: 1.5 }}>可选的全局样式重置，更贴合 MUI。</Typography>
                <Box
                  component="pre"
                  sx={{
                    p: 1.25,
                    borderRadius: '12px',
                    bgcolor: '#0F1110',
                    border: '1px solid #1F2421',
                    color: '#E8E6DC',
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: 11,
                    overflowX: 'auto',
                  }}
                >{`import CssBaseline from '@mui/material/CssBaseline';

<ThemeProvider theme={theme}>
  <CssBaseline />
  <App />
</ThemeProvider>`}</Box>
                <Alert severity="success" sx={{ mt: 1.25, borderRadius: '12px', py: 0.5 }}>
                  <Typography sx={{ fontSize: 11 }}>
                    本站已启用{' '}
                    <Link href="https://mui.com/material-ui/react-css-baseline/" target="_blank" sx={{ fontWeight: 600 }}>
                      CssBaseline
                    </Link>
                  </Typography>
                </Alert>
              </Paper>
            </Box>

            <Divider />
            <Typography sx={{ fontSize: 12.5, color: 'text.secondary' }}>
              更多用法见{' '}
              <Link href="https://mui.com/material-ui/getting-started/usage/" target="_blank" sx={{ fontWeight: 600 }}>
                官方 Usage 文档
              </Link>
              。
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
