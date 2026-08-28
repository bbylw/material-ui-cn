import * as React from 'react'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import CheckIcon from '@mui/icons-material/Check'

export default function CodeBlock({
  code,
  lang = 'bash',
  withPrompt = true,
}: {
  code: string
  lang?: string
  withPrompt?: boolean
}) {
  const [copied, setCopied] = React.useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 1400)
    } catch {
      /* ignore */
    }
  }

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        px: 1.75,
        py: 1.1,
        borderRadius: '14px',
        bgcolor: '#0F1110',
        border: '1px solid #1F2421',
        overflow: 'hidden',
        boxShadow: '0 10px 30px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.06)',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 7,
          right: 40,
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: 10,
          letterSpacing: '0.08em',
          color: '#6B7280',
          textTransform: 'uppercase',
        }}
      >
        {lang}
      </Box>
      <Box
        component="pre"
        sx={{
          m: 0,
          flex: 1,
          overflowX: 'auto',
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: 12.5,
          lineHeight: 1.65,
          color: '#E8E6DC',
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-all',
          pr: 1,
        }}
      >
        {withPrompt ? (
          <>
            <Box component="span" sx={{ color: '#D97757', userSelect: 'none' }}>
              $&nbsp;
            </Box>
            {code}
          </>
        ) : (
          code
        )}
      </Box>
      <Tooltip title={copied ? '已复制' : '复制'}>
        <IconButton size="small" onClick={copy} sx={{ color: copied ? '#4ADE80' : '#9CA3AF', bgcolor: 'rgba(255,255,255,0.06)', width: 28, height: 28, '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } }}>
          {copied ? <CheckIcon sx={{ fontSize: 14 }} /> : <ContentCopyIcon sx={{ fontSize: 14 }} />}
        </IconButton>
      </Tooltip>
    </Box>
  )
}
