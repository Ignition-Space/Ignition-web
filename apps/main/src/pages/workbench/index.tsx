import ProTable from './table'
import List from './list'
import { css } from '@emotion/css'

const classes = {
  workbench: css({
  })
}

export default () => {
  return (
    <div className={classes.workbench} >
      <List/>
    </div>
  )
}