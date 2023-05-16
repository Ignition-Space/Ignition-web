import React from 'react'
import { ModalForm, ProForm, ProFormText } from '@ant-design/pro-components'
import { Avatar, Button, Card, Col, Divider, Row, ConfigProvider, Typography } from 'antd'
import { GitlabOutlined, WechatOutlined, SlackOutlined } from '@ant-design/icons'
import { css } from '@emotion/css'


export interface LoginModalProps {
  children?: JSX.Element
}

export const LoginModal: React.FC<LoginModalProps> = (props) => {
  return (
    <ModalForm title="立即登录" width={450} submitter={false} trigger={props.children} modalProps={{
      centered: true
    }} >
      <Card>
        <ProForm submitter={false} >
          <ProFormText
            name="username"
            fieldProps={{
              size: 'large',
            }}
            placeholder={'手机号/邮箱/用户名'}
            rules={[
              {
                required: true,
                message: '请输入手机号/邮箱/用户名!',
              },
            ]}
          />
          <ProFormText.Password
            name="password"
            fieldProps={{
              size: 'large',
            }}
            placeholder={'密码: ant.design'}
            rules={[
              {
                required: true,
                message: '请输入密码！',
              },
            ]}
          />
          <Button block size="large" type="primary" >立即登录</Button>
          <Divider plain >
            <Typography.Text type="secondary" >其他登录方式</Typography.Text>
          </Divider>
          <div className={css({
            display: 'flex',
            justifyContent: 'space-between',
            gap: 12
          })} >
            <Card size='small' style={{ width: '100%' }} >111</Card>
            <Card  size='small' style={{ width: '100%' }} >111</Card>
            <Card  size='small' style={{ width: '100%' }} >111</Card>
          </div>
        </ProForm>
      </Card>
    </ModalForm>
  )
}