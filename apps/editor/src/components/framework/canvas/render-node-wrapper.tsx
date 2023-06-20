import * as React from 'react'
import { useNode, useEditor } from '@craftjs/core'
import type { MenuProps } from 'antd';
import { Dropdown } from 'antd'

const items: MenuProps['items'] = [
  {
    label: '1st menu item',
    key: '1',
  },
  {
    label: '2nd menu item',
    key: '2',
  },
  {
    label: '3rd menu item',
    key: '3',
  },
];

export interface RenderNodeWrapperProps {
    render: React.ReactElement
}


export const RenderNodeWrapper: React.FC<RenderNodeWrapperProps> = ({ render }) => {

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

  return (
    <>
      {render}
    </>
  )
}
