import React from 'react'
import { createPortal } from 'react-dom'
import { addHttpPrefix, getAppendTargetElement } from '@/framework/utils'
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
              key: head.url,
              rel: 'stylesheet',
              href: addHttpPrefix(head.url)
            }): React.createElement(head.tag, {
              key: head.url,
              type: 'text/javascript',
              src: addHttpPrefix(head.url),
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

  React.useEffect(() => {
    const target: any = getAppendTargetElement()
    if (target) {
      target.a = 'wangly19'
    }
    
  }, [])

  return {
    injectHeadComponents
  }
}