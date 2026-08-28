import * as React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Chip from '@mui/material/Chip'
import Switch from '@mui/material/Switch'
import Checkbox from '@mui/material/Checkbox'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Slider from '@mui/material/Slider'
import Alert from '@mui/material/Alert'
import Badge from '@mui/material/Badge'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Rating from '@mui/material/Rating'
import LinearProgress from '@mui/material/LinearProgress'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import FavoriteIcon from '@mui/icons-material/Favorite'
import MailIcon from '@mui/icons-material/Mail'
import { SectionHead } from './Intro'
import { motion } from 'framer-motion'

function DemoCard({ title, children, cols = 3 }: { title: string; children: React.ReactNode; cols?: number }) {
  return (
    <Paper
      component={motion.div}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      variant="outlined"
      sx={{
        p: 2.5,
        borderRadius: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: 1.5,
        minHeight: 168,
        gridColumn: { xs: 'span 12', sm: `span ${cols === 6 ? 12 : 6}`, md: `span ${cols}` },
        bgcolor: 'background.paper',
        '&:hover': { borderColor: 'secondary.main', transform: 'translateY(-2px)', boxShadow: '0 12px 28px rgba(15,17,16,0.06)' },
        transition: 'all 220ms cubic-bezier(0.16,1,0.3,1)',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography sx={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 10, letterSpacing: '0.1em', color: 'text.secondary', fontWeight: 600 }}>
          {title}
        </Typography>
        <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: 'divider' }} />
      </Box>
      <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{children}</Box>
    </Paper>
  )
}

export default function ComponentShowcase() {
  const [text, setText] = React.useState('你好 MUI')
  const [rating, setRating] = React.useState<number | null>(4)
  const [slider, setSlider] = React.useState(36)
  const [checked, setChecked] = React.useState(true)
  const [radio, setRadio] = React.useState('a')
  const [select, setSelect] = React.useState('opt2')

  return (
    <Container id="components" sx={{ maxWidth: 1400, py: { xs: 7, md: 10 } }}>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'end', gap: 2, mb: 1 }}>
        <SectionHead overline="05 — 组件" title="组件一览 · 所见即所得" caption="90+ 生产级组件，全部支持深浅色、Theming 与 TypeScript。下方可直接交互。" />
        <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', gap: 1, fontFamily: '"JetBrains Mono", monospace', fontSize: 11, color: 'text.secondary' }}>
          <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#22C55E', animation: 'pulse 2s infinite' }} /> INTERACTIVE
        </Box>
      </Box>

      {/* Bento 12-col varied spans */}
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 2 }}>
        <DemoCard title="BUTTON · 按钮" cols={4}>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button variant="contained" size="small" sx={{ bgcolor: 'secondary.main' }}>
              Contained
            </Button>
            <Button variant="outlined" size="small" sx={{ borderColor: 'divider', color: 'text.primary' }}>
              Outlined
            </Button>
            <Button variant="text" size="small">
              Text
            </Button>
          </Box>
        </DemoCard>

        <DemoCard title="TEXTFIELD · 输入" cols={4}>
          <TextField size="small" label="输入框" value={text} onChange={(e) => setText(e.target.value)} sx={{ width: 180, '& .MuiOutlinedInput-root': { borderRadius: '12px' } }} />
        </DemoCard>

        <DemoCard title="CHIP / BADGE" cols={4}>
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Chip label="可删除" onDelete={() => {}} size="small" sx={{ bgcolor: 'secondary.main', color: '#fff', fontWeight: 600 }} />
            <Chip label="轮廓" variant="outlined" size="small" />
            <Badge badgeContent={4} color="error">
              <MailIcon color="action" />
            </Badge>
          </Box>
        </DemoCard>

        <DemoCard title="SWITCH / CHECKBOX" cols={3}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5, alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Switch size="small" checked={checked} onChange={(e) => setChecked(e.target.checked)} sx={{ '& .MuiSwitch-switchBase.Mui-checked': { color: 'secondary.main' }, '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': { bgcolor: 'secondary.main' } }} />
              <Checkbox size="small" checked={checked} onChange={(e) => setChecked(e.target.checked)} sx={{ '&.Mui-checked': { color: 'secondary.main' } }} />
              <FavoriteIcon fontSize="small" color={checked ? 'error' : 'disabled'} />
            </Box>
            <RadioGroup row value={radio} onChange={(e) => setRadio(e.target.value)} sx={{ gap: 0 }}>
              <FormControlLabel value="a" control={<Radio size="small" sx={{ '&.Mui-checked': { color: 'secondary.main' } }} />} label="A" />
              <FormControlLabel value="b" control={<Radio size="small" sx={{ '&.Mui-checked': { color: 'secondary.main' } }} />} label="B" />
            </RadioGroup>
          </Box>
        </DemoCard>

        <DemoCard title="SLIDER / PROGRESS" cols={3}>
          <Box sx={{ width: 180 }}>
            <Slider size="small" value={slider} onChange={(_, v) => setSlider(v as number)} valueLabelDisplay="auto" sx={{ color: 'secondary.main' }} />
            <LinearProgress variant="determinate" value={slider} sx={{ mt: 1, height: 4, borderRadius: 999, bgcolor: 'divider', '& .MuiLinearProgress-bar': { bgcolor: 'secondary.main' } }} />
          </Box>
        </DemoCard>

        <DemoCard title="SELECT · 选择" cols={3}>
          <FormControl size="small" sx={{ minWidth: 160 }}>
            <InputLabel>选项</InputLabel>
            <Select label="选项" value={select} onChange={(e) => setSelect(e.target.value)} sx={{ borderRadius: '12px' }}>
              <MenuItem value="opt1">选项一</MenuItem>
              <MenuItem value="opt2">选项二</MenuItem>
              <MenuItem value="opt3">选项三</MenuItem>
            </Select>
          </FormControl>
        </DemoCard>

        <DemoCard title="AVATAR / RATING" cols={3}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.25, alignItems: 'center' }}>
            <AvatarGroup max={3} sx={{ '& .MuiAvatar-root': { width: 32, height: 32, fontSize: 13, borderColor: 'background.paper' } }}>
              <Avatar sx={{ bgcolor: 'primary.main' }}>A</Avatar>
              <Avatar sx={{ bgcolor: 'secondary.main' }}>B</Avatar>
              <Avatar sx={{ bgcolor: '#7A9B8E' }}>C</Avatar>
              <Avatar>D</Avatar>
            </AvatarGroup>
            <Rating value={rating} onChange={(_, v) => setRating(v)} size="small" sx={{ '& .MuiRating-iconFilled': { color: 'secondary.main' } }} />
          </Box>
        </DemoCard>

        <DemoCard title="ALERT · 反馈" cols={6}>
          <Alert severity="success" variant="outlined" sx={{ borderRadius: '12px', py: 0.25, borderColor: '#22C55E', color: 'text.primary' }}>
            操作成功 — 已应用主题变更。
          </Alert>
        </DemoCard>

        <DemoCard title="CODE · 令牌" cols={6}>
          <Box
            sx={{
              px: 1.5,
              py: 0.75,
              borderRadius: 999,
              bgcolor: '#0F1110',
              color: '#E8E6DC',
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: 11,
              border: '1px solid #1F2421',
            }}
          >
            --mui-palette-secondary-main
          </Box>
        </DemoCard>
      </Box>

      <Typography sx={{ fontSize: 12, color: 'text.secondary', textAlign: 'center', mt: 3, fontFamily: '"JetBrains Mono", monospace' }}>
        完整清单 →{' '}
        <Box component="a" href="https://mui.com/material-ui/all-components/" target="_blank" rel="noopener" sx={{ color: 'secondary.main', fontWeight: 600, textDecoration: 'none' }}>
          mui.com/material-ui/all-components
        </Box>
      </Typography>
    </Container>
  )
}
