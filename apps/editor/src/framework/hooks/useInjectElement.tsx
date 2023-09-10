import React from 'react'
import { addHttpPrefix } from '@/framework/utils'
import { useBoolean, useMount } from 'ahooks'

export const useInjectElement = () => {

  const [injectHeadComponents, setInjectHeadComponents] = React.useState<React.ReactNode[]>([])

  useMount(() => {
    const preloadHeads = localStorage.getItem("editor_heads")
      try {
        if (preloadHeads) {
          const heads: Array<{
            tag: 'link' | 'script',
            url: string
          }> = JSON.parse(preloadHeads)

          const headElements = heads.map((head) => (
            head.tag === 'link' ? React.createElement(head.tag, {
              rel: 'stylesheet',
              href: addHttpPrefix(head.url)
            }): React.createElement(head.tag, {
              type: 'text/javascript',
              src: addHttpPrefix(head.url),
              async: true
            })
          ))

          setInjectHeadComponents(headElements)
  
        } else {
          console.log("usePreLoadSource: 无初始化加载资源...")
        }
      } catch (error: any) {
        throw new Error(error)
      } finally {
      }
  })

  return {
    injectHeadComponents
  }
}