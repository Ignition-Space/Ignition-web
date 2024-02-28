import { css } from "@emotion/css"
import { Flex } from "antd"
import { FlexProps } from "antd/lib"

const classes = {
  root: css({
    height: '100vh',
    width: '100vw',
  }),
  content: css({
    width: '100%',
    height: '100%',
    maxWidth: 1500,
  })
}

export const RootContainer: React.FC<FlexProps> = ({ children, ...props }) => {
  return (
    <Flex className={classes.root} justify="center" {...props} >
      <div className={classes.content} >
        {children}
      </div>
    </Flex>
  )
}