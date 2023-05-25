import * as React from 'react'
import { useNode, useEditor } from '@craftjs/core'
import { theme } from 'antd'
import { css } from '@emotion/css'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'

export interface RenderNodeWrapperProps {
    render: React.ReactElement
}

const ViewPortID = '#__CasterViewPort__'

export const RenderNodeWrapper: React.FC<RenderNodeWrapperProps> = ({ render }) => {
  const currentRef = React.useRef<HTMLDivElement>(null)
  const { token } = theme.useToken()
  const [cache, setCache] = React.useState<any>()

  const { id } = useNode()
  const { query, isActive, isHovered } = useEditor((_, queryEditor) => ({
    isActive: queryEditor.getEvent('selected').contains(id),
    isHovered: queryEditor.getEvent("hovered").contains(id)
  }))

  const {
    dom,
    isRootNode,
  } = useNode((node) => ({
    isRootNode: query.node(id).isRoot(),
    dom: node.dom,
    name: node.data.custom.displayName || node.data.displayName,
    parent: node.data.parent,
    props: node.data.props,
    nodeChild: node
  }))

  React.useEffect(() => {
    if (dom) {
      if (isActive) {
        dom.classList.add("editor-component-active")
      } else {
        dom.classList.remove("editor-component-active")
      }
    }
  }, [dom, isActive])


  React.useEffect(() => {
    if (dom && !isRootNode) {
      if (isHovered && !isActive) {
        dom.classList.add("editor-component-hover")
      } else {
        dom.classList.remove("editor-component-hover")
      }
    }
  }, [dom, isHovered, isRootNode, isActive])

  const getPos = React.useCallback((curDOM: HTMLElement | null) => {
    const { top, left, bottom } = curDOM
      ? curDOM.getBoundingClientRect()
      : { top: 0, left: 0, bottom: 0 }
    return {
      top: `${top > 0 ? top : bottom}px`,
      left: `${left}px`
    }
  }, [])

  const scroll = React.useCallback(() => {
    const { current: currentDOM } = currentRef

    if (!currentDOM) return
    const { top, left } = getPos(dom as HTMLElement)
    currentDOM.style.top = top
    currentDOM.style.left = left
  }, [dom, getPos])

  React.useEffect(() => {
    const mountDocument = document?.querySelector(ViewPortID)
    mountDocument?.addEventListener('scroll', scroll)

    return () => {
      mountDocument
        ?.removeEventListener('scroll', scroll)
    }
  }, [scroll])
  return (
    <>
      {render}
    </>
  )
}
