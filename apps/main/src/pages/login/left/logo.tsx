import { css } from "@emotion/css"

const classes = {
  logo: css({
    fontSize: 32,
    position: 'absolute',
    top: 40,
    left: 40,
    fontFamily: `Outfit,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol`
  })
}

export const Logo = () => {
  return (
    <h1 className={classes.logo} >
      Huos
    </h1>
  )
}