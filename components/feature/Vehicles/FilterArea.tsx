import {
  CalendarMonth,
  CalendarMonthOutlined,
  CheckBox,
  ExpandMore,
  Search,
} from '@mui/icons-material'
import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material'
import { DesktopDatePicker } from '@mui/x-date-pickers'
import React, { useState } from 'react'
export const FilterArea = () => {
  const [vehicleInspectionStartedIn, setVehicleInspectionStartedIn] =
    useState(null)
  const [vehicleInspectionExpiredIn, setVehicleInspectionExpiredIn] =
    useState(null)
  return (
    <div>
      <Card
        sx={{
          boxShadow: '0px 4px 15px rgba(164, 164, 164, 0.2)',
          borderRadius: 0.5,
          padding: 3,
          display: 'flex',
          gap: '20px',
        }}
      >
        <Grid container spacing="20px">
          <Grid md={3} item>
            <Box display="flex" gap={0.5} flexDirection="column">
              <Typography
                fontSize={14}
                lineHeight="20px"
                fontWeight={700}
                component="span"
              >
                拠点名称
              </Typography>
              <TextField
                size="small"
                style={Style.TextFieldStyle}
                placeholder="拠点名称"
                variant="outlined"
              />
            </Box>
          </Grid>
          <Grid md={2} item>
            <Box display="flex" gap={0.5} flexDirection="column">
              <Typography
                fontSize={14}
                lineHeight="20px"
                fontWeight={700}
                component="span"
              >
                登録番号（ナンバー）
              </Typography>
              <TextField
                size="small"
                style={Style.TextFieldStyle}
                placeholder="半角4桁"
                variant="outlined"
              />
            </Box>
          </Grid>
          <Grid md={2} item>
            <Box display="flex" gap={0.5} flexDirection="column">
              <Typography
                fontSize={14}
                lineHeight="20px"
                fontWeight={700}
                component="span"
              >
                社番
              </Typography>
              <TextField
                size="small"
                style={Style.TextFieldStyle}
                placeholder="半角20桁"
                variant="outlined"
              />
            </Box>
          </Grid>
          <Grid md={2} item>
            <Box display="flex" gap={0.5} flexDirection="column">
              <Typography
                fontSize={14}
                lineHeight="20px"
                fontWeight={700}
                component="span"
              >
                車種・車型
              </Typography>
              {/*TODO SelectのIcon色をデザイン通りに修正する */}
              <Select
                size="small"
                style={Style.SelectStyle}
                IconComponent={ExpandMore}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </Box>
          </Grid>
          <Grid md={3} item>
            <Box display="flex" gap={0.5} flexDirection="column">
              <Typography
                fontSize={14}
                lineHeight="20px"
                fontWeight={700}
                component="span"
              >
                車名
              </Typography>
              <TextField
                size="small"
                style={Style.TextFieldStyle}
                placeholder="全角20桁"
                variant="outlined"
              />
            </Box>
          </Grid>
          <Grid md={3} item>
            <Box display="flex" gap={0.5} flexDirection="column">
              <Typography
                fontSize={14}
                lineHeight="20px"
                fontWeight={700}
                component="span"
              >
                車検満了日
              </Typography>
              <Box display="flex" gap={12 / 8} alignItems="center">
                <DesktopDatePicker
                  components={{
                    OpenPickerIcon: () => (
                      <CalendarMonthOutlined sx={{ color: '#1A1C1E' }} />
                    ),
                  }}
                  value={vehicleInspectionStartedIn}
                  onChange={(newValue) => {
                    setVehicleInspectionStartedIn(newValue)
                  }}
                  inputFormat="MM/DD/YYYY"
                  renderInput={(params) => (
                    <TextField
                      size="small"
                      style={Style.DataPickerStyle}
                      {...params}
                      inputProps={{
                        ...params.inputProps,
                        placeholder: '年/月/日',
                      }}
                    />
                  )}
                />
                ~
                <DesktopDatePicker
                  components={{
                    OpenPickerIcon: () => (
                      <CalendarMonthOutlined sx={{ color: '#1A1C1E' }} />
                    ),
                  }}
                  value={vehicleInspectionExpiredIn}
                  onChange={(newValue) => {
                    setVehicleInspectionExpiredIn(newValue)
                  }}
                  inputFormat="MM/DD/YYYY"
                  renderInput={(params) => (
                    <TextField
                      size="small"
                      style={Style.DataPickerStyle}
                      {...params}
                      inputProps={{
                        ...params.inputProps,
                        placeholder: '年/月/日',
                      }}
                    />
                  )}
                />
              </Box>
            </Box>
          </Grid>
          <Grid item md={6}>
            <Box display="flex" justifyContent="space-between">
              <Box display="flex" gap={0.5} flexDirection="column">
                <Typography
                  fontSize={14}
                  lineHeight="20px"
                  fontWeight={700}
                  component="span"
                >
                  状態
                </Typography>
                <FormGroup>
                  <Box display="flex" ml={1}>
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="使用中"
                    />
                    <FormControlLabel control={<Checkbox />} label="使用予定" />
                    <FormControlLabel control={<Checkbox />} label="売却済" />
                    <FormControlLabel control={<Checkbox />} label="抹消" />
                    <FormControlLabel control={<Checkbox />} label="譲渡" />
                  </Box>
                </FormGroup>
              </Box>
              <Box display="flex" gap={0.5} flexDirection="column">
                <Typography
                  fontSize={14}
                  lineHeight="20px"
                  fontWeight={700}
                  component="span"
                >
                  委託フラグ
                </Typography>
                <FormGroup>
                  <Box ml={1}>
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="委託済み"
                    />
                  </Box>
                </FormGroup>
              </Box>
            </Box>
          </Grid>
          <Grid item md={3}>
            <Box
              display="flex"
              gap={3}
              width="100%"
              height="100%"
              justifyContent="flex-end"
              alignItems="flex-end"
            >
              <Button size="large" variant="outlined">
                クリア
              </Button>
              <Button size="large" variant="contained">
                <Box
                  display="flex"
                  gap={0.5}
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Search />
                  <span>検索</span>
                </Box>
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </div>
  )
}

export const Style = {
  TextFieldStyle: {
    backgroundColor: '#F1F0F4',
  },
  SelectStyle: {
    backgroundColor: '#F1F0F4',
  },
  DataPickerStyle: {
    backgroundColor: '#F1F0F4',
  },
}
