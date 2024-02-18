import { Section } from './left'
import { Content } from './content'
import { css } from '@emotion/css'

const classes = {
  layout: css({
    height: '100vh',
    width: '100vw',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
  }),
}

const LoginPage = () => {
  return (
    <div className={classes.layout} >
      <Section/>
      <Content/>
    </div>
  )
}

export default LoginPage