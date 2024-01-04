import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'

import { ImagePreview } from './ImagePreview'
import {
  ScrapVehicleInfo,
  vehicleBasicInfo,
  vehicleImagePreview,
  vehicleProcureInfo,
} from '@/constants/vehicleInfo'
import { useVehicleDetail } from '@/hooks/useVehicleDetail'
import { TabPanel } from './Tabpanel'
import { Button } from '@mui/material'
import { TextFieldWithLabel } from '@/components/common/TextFieldWithLabel'
import { TitleWithBar } from '@/components/common/TitleWithBar'

export const MainInformationArea = () => {
  const { a11yProps, handleChange, value } = useVehicleDetail()
  return (
    <>
      <Box>
        <Box
          sx={{
            borderBottom: 'none',
            borderColor: 'divider',
            m: '30px 0 12px 0',
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            TabIndicatorProps={{
              style: {
                height: '2px',
              },
            }}
          >
            <Tab label="1.車両情報" {...a11yProps(0)} style={Style.TabStyle} />
            <Tab
              label="2.架装・車載機"
              {...a11yProps(1)}
              style={Style.TabStyle}
            />
            <Tab label="3.配属情報" {...a11yProps(2)} style={Style.TabStyle} />
            <Tab
              label="4.自賠損保険"
              {...a11yProps(4)}
              style={Style.TabStyle}
            />
            <Tab
              label="5.リース情報"
              {...a11yProps(5)}
              style={Style.TabStyle}
            />
            <Tab
              label="6.その他情報"
              {...a11yProps(6)}
              style={Style.TabStyle}
            />
            <Tab label="7.画像登録" {...a11yProps(7)} style={Style.TabStyle} />
          </Tabs>
        </Box>
      </Box>
      <Box
        width="100%"
        height={1092}
        bgcolor="#fff"
        borderRadius="4px"
        boxShadow="0 4px 15px rgba(164, 164, 164,  0.2)"
        p="24px"
        sx={Style.TabPanelStyle}
      >
        <TitleWithBar>車両基礎情報</TitleWithBar>
        <TabPanel value={value} index={0}>
          <Box display="flex" flexWrap="wrap" gap="30px">
            <>
              {vehicleBasicInfo.map((info) => (
                <div key={info.id}>
                  <TextFieldWithLabel
                    labelName={info.labelName}
                    width={info.inputWidth}
                    mt={info.inputMt}
                  />
                </div>
              ))}
            </>
          </Box>
          <Box m="30px 0 24px 0">
            <TitleWithBar>調達情報</TitleWithBar>
          </Box>
          <Box display="flex" gap="30px">
            <>
              {ScrapVehicleInfo.map((info) => (
                <div key={info.id}>
                  <TextFieldWithLabel
                    labelName={info.labelName}
                    width={info.inputWidth}
                  />
                </div>
              ))}
            </>
          </Box>
          <Box m="30px 0 24px 0">
            <TitleWithBar>廃車情報</TitleWithBar>
          </Box>
          <Box display="flex" gap="24px">
            <>
              {vehicleProcureInfo.map((info) => (
                <div key={info.id}>
                  <TextFieldWithLabel
                    labelName={info.labelName}
                    width={info.inputWidth}
                  />
                </div>
              ))}
            </>
          </Box>
          <Box m="30px 0 24px 0">
            <TitleWithBar>登録画像</TitleWithBar>
          </Box>
          <Box display="flex" flexWrap="wrap" gap="24px">
            <>
              {vehicleImagePreview.map((image) => (
                <div key={image.id}>
                  <ImagePreview updateDate={image.updateDate} />
                </div>
              ))}
            </>
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
          2
        </TabPanel>
        <TabPanel value={value} index={2}>
          3
        </TabPanel>
        <TabPanel value={value} index={3}>
          4
        </TabPanel>
        <TabPanel value={value} index={4}>
          5
        </TabPanel>
        <TabPanel value={value} index={5}>
          6
        </TabPanel>
        <TabPanel value={value} index={6}>
          7
        </TabPanel>
      </Box>
      <Box display="flex" justifyContent="flex-end">
        <Button
          size="large"
          variant="contained"
          sx={{
            radius: 4,
            mt: '24px',
            bgcolor: '#1F60A2',
          }}
        >
          編集
        </Button>
      </Box>
    </>
  )
}

export const Style = {
  TabStyle: {
    width: 188,
    borderBottomColor: '#f1f0f4',
    fontSize: 20,
    fontWeight: 700,
  },
  TabPanelStyle: {
    '.css-19kzrtu': {
      p: '24px 0 0 0',
    },
  },
}
