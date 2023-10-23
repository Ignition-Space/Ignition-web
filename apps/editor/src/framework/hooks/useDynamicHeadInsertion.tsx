import React from 'react'
import { addHttpPrefix } from '@/framework/utils'

/**
 * 创建css Link组件
 * @param href css地址
 */
function createCssLink(href: string): HTMLLinkElement {
  const cssLink = document.createElement('link');
  cssLink.rel = 'stylesheet';
  cssLink.href = addHttpPrefix(href);
  return cssLink;
}

/**
 * 创建js script地址
 * @param src 脚本地址
 */
function createJsScript(src: string): HTMLScriptElement {
  const jsScript = document.createElement('script');
  jsScript.src = addHttpPrefix(src);
  jsScript.async = true;
  return jsScript;
}

/**
 * 注入预加载资源
 */
export const useDynamicHeadInsertion = () => {

  const element = React.useMemo(() => {
    const preloadHeads = localStorage.getItem("editor_heads")

    if (!preloadHeads) return null

    try {
      const heads: Array<{
        tag: 'link' | 'script',
        url: string
      }> = JSON.parse(preloadHeads)

      const fragment = document.createDocumentFragment();

      heads.forEach((item) => {
        if (item.tag === "link") {
          fragment.appendChild(createCssLink(item.url))
        } else {
          fragment.appendChild(createJsScript(item.url))
        }
      })

      return fragment
      

    } catch (error) {
      return null
    }

  }, [])

  return element
  
}