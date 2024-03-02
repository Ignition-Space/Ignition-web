import React from 'react'
import _ from 'lodash'
import { jsRuntime } from '../runtime'
import { useTranslation } from 'react-i18next'
import { useCreateStore } from '../state'
import { App } from 'antd'

export const useParseBinding = (props: Record<string, any>, events?: {
  name: string;
  fn: string
}[]) => {


  const app = App.useApp()

  const { t } = useTranslation()

  const customizer = (value: any) => {
    if (_.isPlainObject(value) && _.has(value, '$$jsx')) {
      const storeData = useCreateStore.getState().data
      return jsRuntime.execute(value.$$jsx, {
        huos: {
          t,
          app,
          getState: useCreateStore.getState,
        }
      })?.value
    }
  }

  const memoizedProps = React.useMemo(() => {
    const data = _.cloneDeepWith(props, customizer)
    return data
  }, [props])

  const memoizedEvents = React.useMemo(() => {
    const eventMap: Record<string, Function> = {}
    if (Array.isArray(events)) {
      _.forEach(events, ({ name, fn }) => {
        const runFun = jsRuntime.execute(fn, {
          huos: {
            t,
            app,
            getState: useCreateStore.getState,
          }
        })?.value

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