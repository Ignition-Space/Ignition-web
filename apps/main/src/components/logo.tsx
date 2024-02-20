import { css } from '@emotion/css'
import { LogoSvg } from '@/icons/logo'
import { Flex, Typography, theme } from 'antd'

const classes = {

  logoName: css({
    fontSize: theme.getDesignToken().fontSizeHeading3,
    lineHeight: 1,
    color: "#333",
    marginTop: 8,
    fontFamily: `Outfit,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol`
  })
}

export const Logo = () => {
  return (
    <Flex justify="flex-start" align="center" gap={12} >
        <LogoSvg height={34} width={34} />
        <Typography.Text strong className={classes.logoName} >HuoS</Typography.Text>
    </Flex>
  )
}