import React from 'react'
import _ from 'lodash'
import { jsRuntime } from '../runtime'
import { useTranslation } from 'react-i18next'
import { useCreateStore } from '../state'

export const useParseBinding = (props: Record<string, any>, events?: {
  name: string;
  fn: string
}[]) => {

  const { t } = useTranslation()

  const customizer = (value: any) => {
    if (_.isPlainObject(value) && _.has(value, '$$jsx')) {
      const storeData = useCreateStore.getState().data
      return jsRuntime.execute(value.$$jsx, {
        $t: t,
        $store: storeData
      })?.value
    }
  }

  const memoizedProps = React.useMemo(() => {
    const data = _.cloneDeepWith(props, customizer)
    return data
  }, [props])

  const memoizedEvents = React.useMemo(() => {
    const storeData = useCreateStore.getState().data
    const eventMap: Record<string, Function> = {}
    if (Array.isArray(events)) {
      _.forEach(events, ({ name, fn }) => {
        const runFun = jsRuntime.execute(fn, {
          $t: t,
          $store: storeData
        })?.value

        console.log(runFun, 'fn')

        eventMap[name] = runFun
      })
    }

    return eventMap
  }, [events])

  console.log(memoizedEvents, 'memoizedEvents')

  return {
    ...memoizedProps,
    ...memoizedEvents
  }
}