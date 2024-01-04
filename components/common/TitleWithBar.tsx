import { Box, Typography } from '@mui/material'
import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const TitleWithBar: React.FC<Props> = ({ children }) => {
  return (
    <Box display="flex" mr={2} borderLeft="4px solid #545F70" height="24px">
      <Typography
        variant="h5"
        fontSize="18px"
        fontWeight="700"
        color="#545F70"
        mt="2px"
        ml="16px"
      >
        {children}
      </Typography>
    </Box>
  )
}
