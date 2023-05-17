import * as React from 'react'
import { ProFormSegmented } from '@ant-design/pro-components'

const options =  ['h1', 'h2', 'h3', 'h4', 'h5'].map((label: string, index: number) => ({
  label,
  value: index + 1
}))

export type HeaderSetterProps = React.ComponentProps<typeof ProFormSegmented >

export const HeaderSetter: React.FC<HeaderSetterProps> = (props) => {

  return (
    <ProFormSegmented request={async () => options} {...props} />
  )
}