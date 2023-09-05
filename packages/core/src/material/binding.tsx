import React from 'react'
import _, { set } from 'lodash'
import { jsRuntime } from '../runtime'
import { useRafState, useThrottleEffect } from 'ahooks'

interface PathItem {
  key: string;
  path: string[];
}

function deepFindAll(obj: any, condition: (value: any, key: string) => boolean, path: string[] = []): string[][] {
  let results: string[][] = [];

  _.forEach(obj, (value: any, key: string) => {
    console.log(key, 'key')
    if (key === 'children') {
      return; // 跳过 children 属性
    }

    const currentPath: string[] = [...path, key];

    if (_.isObject(value)) {
      const nestedResults = deepFindAll(value, condition, currentPath); // 递归深度遍历对象的属性值
      results = [...results, ...nestedResults];
    }

    if (condition(value, key)) {
      results.push(currentPath);
    }
  });

  return results;
}


export const useParseBinding = (props: Record<string, any>, id?: string) => {

  const [memoizdProps, setMemoizdProps] = useRafState(props)

  const customizer = (value: any) => {
    if (_.isPlainObject(value) && _.has(value, '$$jsx')) {
      return jsRuntime.execute(value.$$jsx, {props})
    }
  }

  useThrottleEffect(() => {
    const data = _.cloneWith(props, customizer)
    setMemoizdProps(data)
  }, [props])

  // const bindgDepends = React.useRef<string[]>([])

  // const jsDependKeys = React.useMemo(() => {
  //   const condition = (value: any) => typeof value?.$$jsx === 'string';
  //   const result = deepFindAll(props, condition)
  //   return result
  // }, [props])

  // // sholudUpdate 是在根据jsDependKeys的内容，通过lodash.get获取绑定的值，然后判断是否发生变化 
  // const sholudUpdate = () => {
  //   return jsDependKeys.map((jsxNamePath) => _.get(props, jsxNamePath))
  // }

  // const memoizdProps = React.useMemo(() => {
  //   const cloneProps = _.cloneDeep(props)

  //   jsDependKeys.forEach((jsxNamePath) => {
  //     const value = _.get(props, jsxNamePath)
  //     if (value) {
  //       const result = jsRuntime.execute(value.$$jsx, {props: cloneProps})
  //       _.set(cloneProps, jsxNamePath, result.value)
  //     }
  //   })

  //   return cloneProps
    
  // }, [props, jsDependKeys])

  return memoizdProps
}