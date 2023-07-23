import { css } from "@emotion/css"
import type { ButtonProps } from "antd";
import { Tooltip } from "antd";
import { Button, Space, theme } from "antd"
import React from "react";

export interface SidebarItemProps extends ButtonProps {
  actived?: boolean;
  tooltip?: React.ReactNode;
}

const SidebarItem = (props: SidebarItemProps) => {
  const { actived, tooltip, ...restProps } = props
  return (
    <Tooltip placement="right" title={tooltip} >
      <Button {...restProps} ghost type={actived ? 'primary' : "text"} />
    </Tooltip>
  )
}

export interface SidebarProps {
  value?: React.Key,
  menus: {
    prototype: SidebarItemProps,
    value: SidebarProps['value']
  }[];
  onChange?: (key: SidebarProps['value']) => void
}

export const Sidebar: React.FC<SidebarProps> = (props) => {


  const { token } = theme.useToken()

  return (
    <div className={css({
      display: 'flex',
      justifyContent: 'center',
      paddingBlock: token.paddingSM
    })} >
      <Space size="middle" direction="vertical" >
        {
          props.menus.map((record) => (
            <SidebarItem
              actived={record.value === props.value}
              key={record.value}
              {...record.prototype}
              onClick={() => props.onChange && props.onChange(record.value)}
            />
          ))
        }
      </Space>
    </div>
  )
}