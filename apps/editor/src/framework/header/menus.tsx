import { css } from '@emotion/css'
import { HuosRemixIcon } from '@huos/icons'

const classes = {
  btn: css({
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  }),
  icon: css({
    fontSize: 20,
    transition: 'color 0.85s',
    ["&:hover"]: {
      color: "#1677ff"
    }
  })
}

export const AppMenus = () => {
  return (
    <div className={classes.btn} >
      <HuosRemixIcon className={classes.icon} type="icon-apps-2-line" />
    </div>
  )
}