import { Logo } from './logo'
import { css } from '@emotion/css'

const classes = {
  section: css({
    background: 'linear-gradient(164deg, #654aec 0%, rgb(77, 74, 236) 100%)',
    paddingInline: 40,
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  }),
  title: css({
    fontSize: 34,
    textAlign: 'center'
  })
}

export const Section = () => {
  return (
    <section className={classes.section} >
      <Logo/>
      <h1 className={classes.title} >现在开始，从零开始打造通用型低代码产品</h1>
    </section>
  )
}