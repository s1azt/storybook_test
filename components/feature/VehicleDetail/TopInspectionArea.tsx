import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'

export const TopInspectionArea = () => {
  return (
    <Box
      width={393}
      height={200}
      bgcolor="#fff"
      boxShadow="0 4px 15px rgba(164, 164, 164,  0.2)"
      borderRadius="4px"
    >
      <Box
        width={393}
        height={40}
        bgcolor="#F5D9FF"
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ borderTopLeftRadius: 4, borderTopRightRadius: 4 }}
      >
        <Typography fontSize="14px" paddingTop="4px">
          車検満了日
        </Typography>
      </Box>
      <Box flexDirection="column">
        <Typography
          fontSize="28px"
          fontWeight="700"
          lineHeight="36px"
          align="center"
          sx={{ m: '18px 0 10px 0' }}
        >
          2022/11/15
        </Typography>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Typography
            variant="h6"
            fontSize="12px"
            color="#76777A"
            sx={{ mr: '16px' }}
          >
            車検切れまで残り
          </Typography>
          <Typography
            variant="h6"
            fontSize="20px"
            fontWeight="700"
            color="#BA1A1A"
            m="0 4px 4px 0"
          >
            45
          </Typography>
          <Typography variant="h6" fontSize="12px">
            日
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center" gap="16px">
          <Button variant="outlined" size="large">
            車検証を表示
          </Button>
          <Button variant="contained" size="large" sx={{ bgcolor: '#1F60A2' }}>
            車検証を購入
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
