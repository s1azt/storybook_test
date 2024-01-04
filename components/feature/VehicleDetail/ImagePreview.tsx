import { Box, InputLabel } from '@mui/material'
import Image from 'next/image'
import Img from '@/public/Rectangle.jpg'

type Props = {
  updateDate: string
}

export const ImagePreview: React.FC<Props> = ({ updateDate }) => {
  return (
    <Box>
      <InputLabel
        sx={{
          width: 300,
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        {updateDate}
      </InputLabel>
      <Image src={Img} alt="" width={300} height={200} style={ImageStyle} />
    </Box>
  )
}

const ImageStyle = {
  border: '1px solid #E3E2E6',
  borderRadius: 3,
}
