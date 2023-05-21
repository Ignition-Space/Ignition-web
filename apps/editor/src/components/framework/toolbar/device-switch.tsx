import { Segmented } from 'antd'
import { useStore, DEVICE } from './store'

export const DeviceOptions = [
  {
    label: 'PC',
    value: DEVICE.PC
  },

  {
    label: 'IPAD',
    value: DEVICE.IPAD
  },

  {
    label: 'MOBILE',
    value: DEVICE.MOBILE
  }
]

export const DeviceSwitch = () => {
  const { deviceWidth, setDeviceWidth } = useStore()

  return (
    <Segmented value={deviceWidth} options={DeviceOptions} onChange={(value) => setDeviceWidth(value as DEVICE)} />
  )
}
