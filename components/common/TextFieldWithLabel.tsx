import { Box, InputLabel } from '@mui/material'

type Props = {
  labelName: string
  width: string
  mt?: string
}

export const TextFieldWithLabel: React.FC<Props> = ({
  labelName,
  width,
  mt,
}) => {
  return (
    <Box mt={mt}>
      <InputLabel sx={InputLabelStyle}>{labelName}</InputLabel>
      <input
        type="text"
        style={{
          borderTop: 'none',
          borderRight: 'none',
          borderLeft: 'none',
          borderBottom: '1px solid #c6c6ca',
          width: `${width}`,
          height: '38px',
          color: '#5d5e82',
          // marginRight: "39px",
        }}
        // readOnly={true} //TODO: 編集時readOnlyをfalseに変更
      />
    </Box>
  )
}

export const InputLabelStyle = {
  color: '#000',
  fontSize: 14,
  fontWeight: 700,
}
