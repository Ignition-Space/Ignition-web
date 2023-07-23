import * as React from 'react'
import {
  Button,
  Dropdown,
  Space,
  theme,
  Divider,
  Input,
  InputNumber
} from 'antd'
import { CaretDownOutlined } from '@ant-design/icons'
import { css } from '@emotion/css'

const items = [100, 80, 60, 40, 30, 20].map((v) => ({
  key: v,
  label: v + '%'
}))

export function ScaleInput (): JSX.Element {
  const { token } = theme.useToken()

  return (
    <Dropdown
      placement='bottom'
      menu={{ items }}
      dropdownRender={(menu) => (
        <div
          className={css({
            backgroundColor: token.colorBgElevated,
            borderRadius: token.borderRadiusLG,
            boxShadow: token.boxShadowSecondary
          })}
        >
          <Space align='center' style={{ padding: 8 }}>
            <InputNumber
              prefix='%'
              value={100}
              className={css({
                width: 120
              })}
            />
          </Space>
          <Divider style={{ margin: 0 }} />
          {React.cloneElement(menu as React.ReactElement, {
            style: { boxShadow: 'none' }
          })}
        </div>
      )}
    >
      <Button>
        <Space size={2}>
          100%
          <CaretDownOutlined />
        </Space>
      </Button>
    </Dropdown>
  )
}
