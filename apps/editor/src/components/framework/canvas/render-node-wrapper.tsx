import * as React from 'react'
import { useNode, useEditor } from '@craftjs/core'
import { theme } from 'antd'
import { css } from '@emotion/css'

export interface RenderNodeWrapperProps {
    render: React.ReactElement
}

const ViewPortID = '#__CasterViewPort__'

export const RenderNodeWrapper: React.FC<RenderNodeWrapperProps> = ({ render }) => {
  const currentRef = React.useRef<HTMLDivElement>(null)
  const { token } = theme.useToken()

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

  const hoveredCss = css({
    position: 'relative',
    '&::after': {
      content: '""',
      pointerEvents: 'none',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      display: 'block',
      border: `1px dashed ${token.colorPrimary}`,
      background: `rgba(0, 0, 0, 0.1)`
    }
  })

  const activedCss = css({
    position: 'relative',
    '&::after': {
      content: '""',
      pointerEvents: 'none',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      display: 'block',
      border: `1px solid ${token.colorPrimary}`,
    }
  })

  React.useEffect(() => {
    if (dom) {
      if (isActive) {
        dom.classList.add(activedCss)
      } else {
        dom.classList.remove(activedCss)
      }
    }
  }, [dom, isActive, activedCss])


  React.useEffect(() => {
    if (dom && !isRootNode) {
      if (isHovered && !isActive) {
        dom.classList.add(hoveredCss)
      } else {
        dom.classList.remove(hoveredCss)
      }
    }
  }, [dom, isHovered, isRootNode, hoveredCss, isActive])

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
    document?.querySelector(ViewPortID)?.addEventListener('scroll', scroll)

    return () => {
      document
        ?.querySelector(ViewPortID)
        ?.removeEventListener('scroll', scroll)
    }
  }, [scroll])

  return (
    <>
      {render}
    </>
  )
}
