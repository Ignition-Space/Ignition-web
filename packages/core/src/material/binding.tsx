import React from 'react'
import _ from 'lodash'
import { jsRuntime } from '../runtime'

export const useParseBinding = (props: Record<string, any>, id?: string) => {

  const customizer = (value: any) => {
    if (_.isPlainObject(value) && _.has(value, '$$jsx')) {
      return jsRuntime.execute(value.$$jsx, {props})?.value
    }
  }

  const memoizedProps = React.useMemo(() => {
    const data = _.cloneDeepWith(props, customizer)
    return data
  }, [props])

  return memoizedProps
}