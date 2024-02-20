import { css } from '@emotion/css'
import { Logo } from '@/components/logo'

const classes = {
  section: css({
    width: '100%',
  }),
}

export const Section = () => {
  return (
    <section className={classes.section} >
      <Logo/>
    </section>
  )
}