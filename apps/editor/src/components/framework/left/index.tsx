import * as React from 'react'
import { Collapse, theme } from 'antd'
import { NodeTree } from './node-tree'
import { DataState } from './data-state'
import { Sidebar } from '../sider'
import { CodepenOutlined, ApartmentOutlined, ApiOutlined, CloudSyncOutlined } from '@ant-design/icons'
import { MaterialCategory } from './materials'
import  { OutlineTree } from './outline-tree'
import { DataSource } from './data-source'
import { css } from '@emotion/css'

const sidebarContext: Record<React.Key, any> = {
  0: <MaterialCategory/>,
  1: <OutlineTree/>,
  2: <DataSource/>
}


export const LeftPanel = () => {
  const { token } = theme.useToken()
  const [selectValue, setSelectValue] = React.useState<React.Key>(0)

  return (
    <div className={css({
      display: 'grid',
      height: 'calc(100vh - 50px)',
      gridTemplateColumns: '50px 1fr'
    })} >
      <Sidebar 
      value={selectValue}
      menus={[
        {
          value: 0,
          prototype: {
            tooltip: "组件",
            icon: <CodepenOutlined />
          }
        },

        {
          value: 1,
          prototype: {
            tooltip: "大纲树",
            icon: <ApartmentOutlined />
          }
        },

        {
          value: 2,
          prototype: {
            tooltip: "数据源",
            icon: <ApiOutlined />
          }
        },

        {
          value: 3,
          prototype: {
            tooltip: "存储",
            icon: <CloudSyncOutlined />
          }
        }
      ]}
      onChange={(v) => setSelectValue(v)} />
      <div className={css({
        borderLeft: `1px solid ${token.colorBorderSecondary}`,
        height: '100%',
        overflow: 'auto'
      })} >
        {sidebarContext?.[selectValue]}
      </div>
    </div>
  )
}
