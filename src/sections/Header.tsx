import * as React from 'react'
import { useColorScheme } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import GitHubIcon from '@mui/icons-material/GitHub'
import MenuIcon from '@mui/icons-material/Menu'
import { motion } from 'framer-motion'

const navItems = [
  { label: '概览', href: '#intro' },
  { label: '安装', href: '#installation' },
  { label: '用法', href: '#usage' },
  { label: '组件', href: '#components' },
  { label: '示例', href: '#examples' },
  { label: '模板', href: '#templates' },
  { label: 'FAQ', href: '#faq' },
]

function Logo() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
      <Box
        sx={{
          width: 36,
          height: 36,
          borderRadius: '10px',
          bgcolor: 'primary.main',
          color: 'primary.contrastText',
          display: 'grid',
          placeItems: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box
          component="svg"
          viewBox="0 0 32 32"
          sx={{ width: 22, height: 22 }}
        >
          <path
            d="M6 22V10l10 8 10-8v12"
            stroke="currentColor"
            strokeWidth="2.8"
            fill="none"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </Box>
        <Box sx={{ position: 'absolute', top: 6, right: 6, width: 6, height: 6, borderRadius: '50%', bgcolor: 'secondary.main' }} />
      </Box>
      <Box>
        <Typography
          sx={{
            fontFamily: '"Space Grotesk", sans-serif',
            fontWeight: 700,
            fontSize: 16,
            letterSpacing: '-0.02em',
            lineHeight: 1,
            color: 'text.primary',
          }}
        >
          Material UI
        </Typography>
        <Typography
          sx={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: 10,
            letterSpacing: '0.08em',
            color: 'text.secondary',
            lineHeight: 1,
          }}
        >
          中文文档 · v9.4.0
        </Typography>
      </Box>
    </Box>
  )
}

export default function Header() {
  const { mode, setMode } = useColorScheme()
  const [open, setOpen] = React.useState(false)

  return (
    <>
      {/* Top hairline meta bar — fixed ink so it never flips to light in dark mode */}
      <Box
        sx={{
          display: { xs: 'none', md: 'flex' },
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 3,
          py: 0.75,
          bgcolor: '#0F1110',
          color: '#E8E6DC',
          fontSize: 12,
          letterSpacing: '0.04em',
          borderBottom: '1px solid #1F2421',
        }}
      >
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <Box component="span" sx={{ opacity: 0.7 }}>
            EST. 2014
          </Box>
          <Box sx={{ width: '1px', height: 12, bgcolor: 'rgba(232,230,220,0.2)' }} />
          <Box component="span">React 生态最大的 UI 社区 · 2,500+ 贡献者</Box>
        </Box>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Box component="a" href="https://mui.com/blog/" target="_blank" rel="noopener" sx={{ color: 'inherit', textDecoration: 'none', opacity: 0.8, '&:hover': { opacity: 1 } }}>
            Blog
          </Box>
          <Box component="a" href="https://mui.com/store/" target="_blank" rel="noopener" sx={{ color: 'inherit', textDecoration: 'none', opacity: 0.8, '&:hover': { opacity: 1 } }}>
            Store
          </Box>
        </Box>
      </Box>

      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          top: 0,
          bgcolor: 'background.default',
          borderBottom: '1px solid',
          borderColor: 'divider',
          backdropFilter: 'blur(12px)',
        }}
      >
        <Box sx={{ maxWidth: 1400, mx: 'auto', width: '100%' }}>
          <Toolbar sx={{ gap: 1, minHeight: 64, px: { xs: 2, md: 3 } }}>
            <Logo />
            <Box sx={{ flexGrow: 1 }} />

            {/* Desktop nav with editorial underline */}
            <Box sx={{ display: { xs: 'none', lg: 'flex' }, gap: 0.5, alignItems: 'center' }}>
              {navItems.map((item, i) => (
                <Box
                  key={item.label}
                  component={motion.div}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Button
                    href={item.href}
                    sx={{
                      color: 'text.primary',
                      fontSize: 13.5,
                      fontWeight: 500,
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        left: 12,
                        right: 12,
                        bottom: 6,
                        height: 1.5,
                        bgcolor: 'secondary.main',
                        transform: 'scaleX(0)',
                        transformOrigin: 'left',
                        transition: 'transform 260ms cubic-bezier(0.16,1,0.3,1)',
                      },
                      '&:hover::after': { transform: 'scaleX(1)' },
                    }}
                  >
                    {item.label}
                  </Button>
                </Box>
              ))}
              <Button
                href="#installation"
                variant="contained"
                size="small"
                sx={{ ml: 1, bgcolor: 'secondary.main', color: '#fff', '&:hover': { bgcolor: '#C86A4A' } }}
              >
                开始使用
              </Button>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, ml: 1 }}>
              <IconButton
                size="small"
                aria-label="切换深浅色模式"
                onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
                sx={{
                  border: '1px solid',
                  borderColor: 'divider',
                  width: 36,
                  height: 36,
                  color: 'text.primary',
                }}
              >
                {mode === 'dark' ? <LightModeIcon fontSize="small" /> : <DarkModeIcon fontSize="small" />}
              </IconButton>
              <IconButton
                size="small"
                aria-label="GitHub"
                href="https://github.com/mui/material-ui"
                target="_blank"
                sx={{
                  border: '1px solid',
                  borderColor: 'divider',
                  width: 36,
                  height: 36,
                  color: 'text.primary',
                  display: { xs: 'none', sm: 'inline-flex' },
                }}
              >
                <GitHubIcon fontSize="small" />
              </IconButton>
              <IconButton
                sx={{ display: { lg: 'none' }, color: 'text.primary' }}
                aria-label="打开导航菜单"
                onClick={() => setOpen(true)}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Box>
      </AppBar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)} slotProps={{ paper: { sx: { width: 320, bgcolor: 'background.default' } } }}>
        <Box sx={{ p: 2.5 }}>
          <Logo />
        </Box>
        <Divider />
        <List sx={{ px: 1 }}>
          {navItems.map((item) => (
            <ListItemButton key={item.label} component="a" href={item.href} onClick={() => setOpen(false)} sx={{ borderRadius: 2 }}>
              <ListItemText primary={item.label} slotProps={{ primary: { sx: { fontWeight: 500 } } }} />
            </ListItemButton>
          ))}
        </List>
        <Divider sx={{ my: 1 }} />
        <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Button href="https://mui.com/material-ui/getting-started/" target="_blank" variant="outlined" fullWidth>
            英文官方文档
          </Button>
          <Button href="https://mui.com/store/" target="_blank" variant="contained" fullWidth sx={{ bgcolor: 'secondary.main' }}>
            模板商店
          </Button>
        </Box>
      </Drawer>
    </>
  )
}
