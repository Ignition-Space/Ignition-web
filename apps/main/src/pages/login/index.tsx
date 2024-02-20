import { css } from '@emotion/css'
import { RootContainer } from '@/components/root'
import { Flex } from 'antd'
import { LoginForm } from './login-form'
import {Section } from './left'

const classes = {
  layout: css({
    height: '100vh',
    width: '100%',
    paddingBlock: 100,
    paddingInline: 24
  }),
}

const LoginPage = () => {
  return (
    <RootContainer>
      <Flex className={classes.layout} >
        <Flex flex={1} justify="flex-start" align="flex-start">
          <Section/>
        </Flex>
        <Flex flex={1} justify="center" align="center">
            <LoginForm/>
        </Flex>
      </Flex>
    </RootContainer>
  )
}

export default LoginPage