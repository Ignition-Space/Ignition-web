import { css } from "@emotion/css"

const classes = {
  logo: css({
    fontSize: 32,
    position: 'absolute',
    top: 40,
    left: 40
  })
}

export const Logo = () => {
  return (
    <h1 className={classes.logo} >
      Huos
    </h1>
  )
}