import * as React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Alert from '@mui/material/Alert'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Divider from '@mui/material/Divider'
import Link from '@mui/material/Link'
import { SectionHead } from './Intro'
import CodeBlock from '../components/CodeBlock'
import TerminalIcon from '@mui/icons-material/Terminal'
import LayersIcon from '@mui/icons-material/Layers'
import FontDownloadIcon from '@mui/icons-material/FontDownload'
import InterestsIcon from '@mui/icons-material/Interests'
import { motion } from 'framer-motion'

const cmds: Record<string, string> = {
  bun: 'bun add @mui/material @emotion/react @emotion/styled',
  npm: 'npm install @mui/material @emotion/react @emotion/styled',
  yarn: 'yarn add @mui/material @emotion/react @emotion/styled',
  pnpm: 'pnpm add @mui/material @emotion/react @emotion/styled',
}

export default function Installation() {
  const [pm, setPm] = React.useState('bun')

  return (
    <Container id="installation" sx={{ maxWidth: 1400, py: { xs: 7, md: 10 } }}>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '4.5fr 7.5fr' }, gap: { xs: 4, lg: 5 }, alignItems: 'start' }}>
        <Box
          component={motion.div}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          sx={{ position: { lg: 'sticky' }, top: { lg: 96 } }}
        >
          <SectionHead overline="03 — 安装" title="安装 Material UI" caption="一条命令，零配置启动。支持 Bun 首选，兼容 npm / yarn / pnpm。" />
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 2 }}>
            <Box sx={{ px: 1.25, py: 0.5, borderRadius: 999, bgcolor: 'secondary.main', color: '#fff', fontSize: 11, fontWeight: 700, letterSpacing: '0.06em' }}>BUN 首选</Box>
            <Box sx={{ px: 1.25, py: 0.5, borderRadius: 999, border: '1px solid', borderColor: 'divider', fontFamily: '"JetBrains Mono", monospace', fontSize: 11 }}>v9.4.0</Box>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {/* Primary install */}
          <Paper
            component={motion.div}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variant="outlined"
            sx={{ p: { xs: 2.5, md: 3 }, borderRadius: '20px', overflow: 'hidden' }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25, mb: 2 }}>
              <Box sx={{ width: 32, height: 32, borderRadius: '10px', bgcolor: 'primary.main', color: 'primary.contrastText', display: 'grid', placeItems: 'center' }}>
                <TerminalIcon sx={{ fontSize: 16 }} />
              </Box>
              <Typography sx={{ fontWeight: 700, fontSize: 15 }}>默认安装</Typography>
              <Box sx={{ flex: 1 }} />
              <Typography sx={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 10, color: 'text.secondary', letterSpacing: '0.08em' }}>PACKAGE MANAGER</Typography>
            </Box>

            <Tabs
              value={pm}
              onChange={(_, v) => setPm(v)}
              sx={{
                mb: 2,
                minHeight: 36,
                bgcolor: 'background.paper',
                borderRadius: '12px',
                p: 0.5,
                border: '1px solid',
                borderColor: 'divider',
                '& .MuiTabs-indicator': { display: 'none' },
                '& .MuiTab-root': {
                  minHeight: 32,
                  textTransform: 'none',
                  fontWeight: 600,
                  fontSize: 13,
                  borderRadius: '10px',
                  flex: 1,
                  maxWidth: 'none',
                },
                '& .MuiTab-root.Mui-selected': { bgcolor: 'primary.main', color: 'primary.contrastText' },
              }}
              variant="fullWidth"
            >
              <Tab value="bun" label="bun" />
              <Tab value="npm" label="npm" />
              <Tab value="yarn" label="yarn" />
              <Tab value="pnpm" label="pnpm" />
            </Tabs>

            <CodeBlock code={cmds[pm]} />

            <Alert
              severity="info"
              sx={{
                mt: 2,
                borderRadius: '14px',
                bgcolor: 'color-mix(in srgb, var(--mui-palette-secondary-main) 8%, var(--mui-palette-background-paper))',
                border: '1px solid',
                borderColor: 'color-mix(in srgb, var(--mui-palette-secondary-main) 18%, transparent)',
              }}
            >
              <Typography sx={{ fontWeight: 700, fontSize: 13 }}>对等依赖</Typography>
              <Typography sx={{ fontSize: 12.5, lineHeight: 1.6, color: 'text.secondary' }}>
                确保已安装 <Box component="code" sx={{ px: 0.5, py: 0.15, borderRadius: 0.75, bgcolor: 'background.default', border: '1px solid', borderColor: 'divider', fontFamily: '"JetBrains Mono", monospace' }}>react</Box> 与{' '}
                <Box component="code" sx={{ px: 0.5, py: 0.15, borderRadius: 0.75, bgcolor: 'background.default', border: '1px solid', borderColor: 'divider', fontFamily: '"JetBrains Mono", monospace' }}>react-dom</Box> （^17 || ^18 || ^19）。
              </Typography>
              <Box
                component="pre"
                sx={{
                  mt: 1,
                  p: 1.25,
                  borderRadius: '10px',
                  bgcolor: 'background.default',
                  border: '1px solid',
                  borderColor: 'divider',
                  fontSize: 11,
                  fontFamily: '"JetBrains Mono", monospace',
                  overflowX: 'auto',
                }}
              >{`"peerDependencies": {
  "react": "^17.0.0 || ^18.0.0 || ^19.0.0",
  "react-dom": "^17.0.0 || ^18.0.0 || ^19.0.0"
}`}</Box>
            </Alert>
          </Paper>

          {/* Grid of extras — bento 2x2 but with varied treatment */}
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2 }}>
            <Paper variant="outlined" sx={{ p: 2.5, borderRadius: '20px', position: 'relative', overflow: 'hidden' }}>
              <Box sx={{ width: 28, height: 28, borderRadius: '8px', bgcolor: 'secondary.main', color: '#fff', display: 'grid', placeItems: 'center', mb: 1.5 }}>
                <LayersIcon sx={{ fontSize: 16 }} />
              </Box>
              <Typography sx={{ fontWeight: 700, fontSize: 14, mb: 0.75 }}>styled-components</Typography>
              <Typography sx={{ fontSize: 12.5, color: 'text.secondary', lineHeight: 1.7, mb: 1.5 }}>默认引擎为 Emotion，改用 SC 需替换引擎。</Typography>
              <CodeBlock code="bun add @mui/material @mui/styled-engine-sc styled-components" lang="bash" />
              <Typography sx={{ fontSize: 11, color: 'text.secondary', mt: 1 }}>
                详见{' '}
                <Link href="https://mui.com/material-ui/integrations/styled-components/" target="_blank" sx={{ fontWeight: 600 }}>
                  官方指南
                </Link>
              </Typography>
            </Paper>

            <Paper variant="outlined" sx={{ p: 2.5, borderRadius: '20px' }}>
              <Box sx={{ width: 28, height: 28, borderRadius: '8px', bgcolor: 'primary.main', color: 'primary.contrastText', display: 'grid', placeItems: 'center', mb: 1.5 }}>
                <FontDownloadIcon sx={{ fontSize: 16 }} />
              </Box>
              <Typography sx={{ fontWeight: 700, fontSize: 14, mb: 0.75 }}>Roboto 字体</Typography>
              <Typography sx={{ fontSize: 12.5, color: 'text.secondary', lineHeight: 1.7, mb: 1.5 }}>推荐 Fontsource 自托管，按需加载字重。</Typography>
              <CodeBlock code="bun add @fontsource/roboto" />
              <Box
                component="pre"
                sx={{
                  mt: 1,
                  p: 1.25,
                  borderRadius: '10px',
                  bgcolor: '#0F1110',
                  color: '#E8E6DC',
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: 11,
                  overflowX: 'auto',
                }}
              >{`import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';`}</Box>
            </Paper>

            <Paper variant="outlined" sx={{ p: 2.5, borderRadius: '20px' }}>
              <Box sx={{ width: 28, height: 28, borderRadius: '8px', bgcolor: 'primary.main', color: 'primary.contrastText', display: 'grid', placeItems: 'center', mb: 1.5 }}>
                <InterestsIcon sx={{ fontSize: 16 }} />
              </Box>
              <Typography sx={{ fontWeight: 700, fontSize: 14, mb: 0.75 }}>图标库</Typography>
              <Typography sx={{ fontSize: 12.5, color: 'text.secondary', lineHeight: 1.7, mb: 1.5 }}>预制 SVG Material Icons，开箱即用。</Typography>
              <CodeBlock code="bun add @mui/icons-material" />
              <Typography sx={{ fontSize: 11, color: 'text.secondary', mt: 1 }}>
                本站已使用 <Box component="code" sx={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11 }}>GitHubIcon</Box> 等
              </Typography>
            </Paper>

            <Paper variant="outlined" sx={{ p: 2.5, borderRadius: '20px', bgcolor: 'background.paper' }}>
              <Typography sx={{ fontWeight: 700, fontSize: 14, mb: 0.75 }}>CDN 快速体验</Typography>
              <Typography sx={{ fontSize: 12.5, color: 'text.secondary', lineHeight: 1.7 }}>
                适合原型，生产环境不推荐（全量加载）。
                <br />
                参考{' '}
                <Link href="https://github.com/mui/material-ui/tree/master/examples/material-ui-via-cdn" target="_blank">
                  CDN 示例
                </Link>
                。
              </Typography>
              <Divider sx={{ my: 1.25 }} />
              <Typography sx={{ fontSize: 11, color: 'text.secondary', lineHeight: 1.6 }}>
                React 18 及以下需固定 <Box component="code" sx={{ fontFamily: '"JetBrains Mono", monospace' }}>react-is</Box> 版本。
              </Typography>
            </Paper>
          </Box>
        </Box>
      </Box>
    </Container>
  )
}
