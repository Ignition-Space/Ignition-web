import * as React from 'react'
import type { UserComponent} from '@craftjs/core';
import { useNode } from '@craftjs/core'
import type { ResizeCallback , ResizableProps } from 're-resizable';
import { Resizable } from 're-resizable'
import { IndicatorRound } from './Indicators'
import { FrameworkContext } from '@lgnition-lowcode/core'

export interface ContainerProps {
  style?: React.CSSProperties;
  children?: React.ReactNode;
  initialWidth?: string | number;
  initialHeight?: string | number;
  width?: string | number;
  height?: string | number;
}

export const Container: UserComponent<
    ContainerProps
> = ({ children, initialWidth, initialHeight, style, ...styleProps }) => {
  const resizable = React.useRef<any>(null)
  const frameworkContext = React.useContext(FrameworkContext)

  const {
    actions: { setProp },
    connectors: { connect },
    active
  } = useNode((node) => ({
    parent: node.data.parent,
    active: node.events.selected
  }))

  const handleResizableChange: ResizeCallback = (
    _,
    __,
    elRef,
  ) => {
    const { width, height } = elRef.style
    setProp((prop: Record<string, any>) => {
      prop.width = width
      prop.height = height
    }, 400)
  }

  console.log(style, 'style')

  return (
    <Resizable
      style={{
        position: 'relative',
        ...style,
      }}
      size={{
        width: styleProps?.width as string,
        height: styleProps?.height as string
      }}
      defaultSize={{
        width: initialWidth || '100%',
        height: initialHeight || '100%'
      }}
      bounds='parent'
      enable={{
        right: frameworkContext?.enabled,
        bottom: frameworkContext?.enabled
      }}
      ref={(ref) => {
        if (ref) {
          resizable.current = ref
          connect(resizable.current.resizable)
        }
      }}
      onResize={handleResizableChange}
    >
      {children}
      <IndicatorRound show={active} />
    </Resizable>
  )
}


Container.craft = {
  displayName: '容器',
  related: {
  }
}