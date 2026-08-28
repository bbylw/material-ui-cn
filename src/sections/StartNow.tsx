import * as React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import IconButton from '@mui/material/IconButton'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import CheckIcon from '@mui/icons-material/Check'
import TerminalIcon from '@mui/icons-material/Terminal'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import GridViewIcon from '@mui/icons-material/GridView'
import BrushIcon from '@mui/icons-material/Brush'
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic'
import DesignServicesIcon from '@mui/icons-material/DesignServices'
import { SectionHead } from './Intro'
import { motion } from 'framer-motion'

const installCmd = 'bun add @mui/material @emotion/react @emotion/styled'

const resources = [
  { icon: <MenuBookIcon sx={{ fontSize: 18 }} />, title: '用法', body: '基础用法，几分钟渲染第一个组件。', href: '#usage' },
  { icon: <GridViewIcon sx={{ fontSize: 18 }} />, title: '示例项目', body: 'Next.js / Vite 等脚手架合集。', href: '#examples' },
  { icon: <BrushIcon sx={{ fontSize: 18 }} />, title: '自定义', body: 'Theme、sx、styled 多层定制。', href: '#installation' },
  { icon: <AutoAwesomeMosaicIcon sx={{ fontSize: 18 }} />, title: '模板', body: '仪表盘、营销页、结账流程等。', href: '#templates' },
  { icon: <DesignServicesIcon sx={{ fontSize: 18 }} />, title: '设计资源', body: 'Figma 社区文件一键 Duplicated。', href: 'https://www.figma.com/community/file/912837788133317724/material-ui-for-figma-and-mui-x' },
]

export default function StartNow() {
  const [copied, setCopied] = React.useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(installCmd)
      setCopied(true)
      setTimeout(() => setCopied(false), 1400)
    } catch {
      /* ignore */
    }
  }

  return (
    <Container id="start-now" sx={{ maxWidth: 1400, py: { xs: 7, md: 10 } }}>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '5fr 7fr' }, gap: 4, alignItems: 'start' }}>
        <Box
          component={motion.div}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          sx={{ position: { lg: 'sticky' }, top: { lg: 96 } }}
        >
          <SectionHead overline="09 — 立即开始" title="即刻启程" caption="从一条命令到第一个组件，5 分钟内完成。" />
          <Paper sx={{ mt: 2, p: 2.5, borderRadius: '20px', bgcolor: 'primary.main', color: 'primary.contrastText', position: 'relative', overflow: 'hidden' }}>
            <Box sx={{ position: 'absolute', width: 180, height: 180, right: -40, top: -40, borderRadius: '50%', background: 'radial-gradient(circle, rgba(217,119,87,0.22) 0%, transparent 70%)' }} />
            <Typography sx={{ fontWeight: 700, fontSize: 14, position: 'relative' }}>安装</Typography>
            <Typography sx={{ fontSize: 12.5, opacity: 0.82, mt: 0.5, lineHeight: 1.6, position: 'relative' }}>只需几条命令，即可将 Material UI 添加到你的项目中。</Typography>
            <Box sx={{ mt: 1.75, display: 'flex', alignItems: 'center', gap: 1, p: 0.75, pl: 1.5, borderRadius: 999, bgcolor: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.14)' }}>
              <TerminalIcon sx={{ fontSize: 16, opacity: 0.8 }} />
              <Box component="code" sx={{ flex: 1, fontFamily: '"JetBrains Mono", monospace', fontSize: 11.5, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {installCmd}
              </Box>
              <IconButton size="small" onClick={copy} sx={{ width: 28, height: 28, bgcolor: '#fff', color: 'primary.main', '&:hover': { bgcolor: '#fff' } }}>
                {copied ? <CheckIcon sx={{ fontSize: 14 }} /> : <ContentCopyIcon sx={{ fontSize: 14 }} />}
              </IconButton>
            </Box>
          </Paper>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', sm: '1fr 1fr 1fr' }, gap: 2 }}>
          {resources.map((r, i) => (
            <Paper
              key={r.title}
              component={motion.a}
              href={r.href}
              target={r.href.startsWith('http') ? '_blank' : undefined}
              rel={r.href.startsWith('http') ? 'noopener' : undefined}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              variant="outlined"
              sx={{
                p: 2.5,
                borderRadius: '20px',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
                bgcolor: 'background.paper',
                '&:hover': { transform: 'translateY(-3px)', borderColor: 'secondary.main', boxShadow: '0 12px 28px rgba(15,17,16,0.06)' },
                transition: 'all 220ms cubic-bezier(0.16,1,0.3,1)',
              }}
            >
              <Box sx={{ width: 32, height: 32, borderRadius: '10px', bgcolor: 'background.default', border: '1px solid', borderColor: 'divider', display: 'grid', placeItems: 'center', color: 'secondary.main' }}>
                {r.icon}
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography sx={{ fontWeight: 700, fontSize: 14, flex: 1, color: 'text.primary' }}>{r.title}</Typography>
                <ArrowOutwardIcon sx={{ fontSize: 14, color: 'text.secondary' }} />
              </Box>
              <Typography sx={{ fontSize: 12.5, color: 'text.secondary', lineHeight: 1.6 }}>{r.body}</Typography>
            </Paper>
          ))}
        </Box>
      </Box>
    </Container>
  )
}
