import * as React from 'react'
import { theme } from 'antd'
import { Sidebar } from '../sider'
import { CodepenOutlined, ApartmentOutlined, ApiOutlined, CloudSyncOutlined } from '@ant-design/icons'
import { MaterialCategory } from './materials'
import  { OutlineTree } from './outline-tree'
import { DataSource } from './data-source'
import { Hisotry } from './hisotry'
import { css } from '@emotion/css'

const sidebarContext: Record<React.Key, any> = {
  components: <MaterialCategory/>,
  1: <OutlineTree/>,
  2: <DataSource/>,
  cloud: <Hisotry/>
}


export const LeftPanel = () => {
  const { token } = theme.useToken()
  const [selectValue, setSelectValue] = React.useState<React.Key>("components")

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
          value: "components",
          prototype: {
            tooltip: "组件",
            icon: <CodepenOutlined />
          }
        },

        {
          value: "nodetree",
          prototype: {
            tooltip: "大纲树",
            icon: <ApartmentOutlined />
          }
        },

        {
          value: 'datasource',
          prototype: {
            tooltip: "数据源",
            icon: <ApiOutlined />
          }
        },

        {
          value: 'cloud',
          prototype: {
            tooltip: "存储",
            icon: <CloudSyncOutlined />
          }
        }
      ]}
      onChange={(v) => v  &&  setSelectValue(v)} />
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
