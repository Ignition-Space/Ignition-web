import React, { useEffect } from 'react'
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

  const customizer = (value: any) => {
    if (_.isPlainObject(value) && _.has(value, '$$jsx')) {
      return jsRuntime.execute(value.$$jsx, {props})?.value
    }
  }

  const memoizedProps = React.useMemo(() => {
    console.log('refresh props', id)
    const data = _.cloneDeepWith(props, customizer)
    return data
  }, [props])

  return memoizedProps
}