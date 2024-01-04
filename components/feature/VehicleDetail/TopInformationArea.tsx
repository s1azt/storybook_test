import { Box, Chip, InputLabel } from '@mui/material'
import Image from 'next/image'
import {
  InputLabelStyle,
  TextFieldWithLabel,
} from '@/components/common/TextFieldWithLabel'
import Img from '@/public/Rectangle.jpg'

export const TopInformationArea = () => {
  return (
    <Box
      width={900}
      height={200}
      pl="32px"
      mr="24px"
      bgcolor="#fff"
      display="flex"
      borderRadius="4px"
      boxShadow="0 4px 15px rgba(164, 164, 164,  0.2)"
    >
      <Box width={220} height={164} position="relative" mr="16px" p="12px">
        <Image src={Img} alt="" width={184} height={124} />
        <Chip
          label="車両名"
          sx={{
            width: 220,
            position: 'absolute',
            bottom: '-10%',
            left: 0,
          }}
        />
      </Box>
      <Box flexDirection="column" pt="6px">
        <Box display="flex" mt="12px" mb="20px" gap="24px">
          <Box>
            <TextFieldWithLabel labelName={'社番'} width={'180px'} />
          </Box>
          <Box>
            <TextFieldWithLabel labelName={'車台番号'} width={'180px'} />
          </Box>
          <Box>
            <InputLabel sx={InputLabelStyle}>状態</InputLabel>

            <select
              style={{
                width: 180,
                height: 38,
                background: '#FFDAD6',
                borderRadius: '40px',
                border: 'none',
                textAlign: 'center',
                left: '10%',
                fontSize: 20,
                fontWeight: 700,
                appearance: 'none',
              }}
            >
              <option value="売却予定">売却予定</option>
              <option value="test">test</option>
            </select>
          </Box>
        </Box>
        <Box>
          <TextFieldWithLabel labelName={'社番'} width="586px" />
        </Box>
      </Box>
    </Box>
  )
}
