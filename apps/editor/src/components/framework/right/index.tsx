import * as React from 'react'
import { Tabs } from 'antd'
import type { TabsProps } from 'antd'
import { Settings } from './render-settings'
import { TabContext } from './tab-context'

const items: TabsProps['items'] = [
  {
    key: 'settings',
    label: '属性设置',
    children: (<TabContext>
      <Settings />
    </TabContext>)
  },
  {
    key: 'styles',
    label: '样式设置',
    children: '11111',
    disabled: true,
  },
  {
    key: 'themes',
    label: '主题设置',
    children: 'Content of Tab Pane 3',
    disabled: true,
  }
]

export const RightPanel = () => {
  return (<Tabs centered items={items} />
  )
}
