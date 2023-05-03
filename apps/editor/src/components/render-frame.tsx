import { css } from '@emotion/css'
import * as React from 'react'
import { createPortal } from 'react-dom'

export interface FrameRenderProps {
  children?: React.ReactNode
}

export const FrameRender: React.FC<FrameRenderProps> = ({ children, ...props }) => {

  const [iframeRef, setIframeRef] = React.useState<HTMLIFrameElement | null>(null)

  const mountNode =
    iframeRef?.contentWindow?.document.body

  React.useEffect(() => {
    const heads = document.head.children;
    const iframeDocumentHead = iframeRef?.contentDocument?.head
    for (let i = 0; i < heads.length; i++) {
      const child = heads[i];
      iframeDocumentHead?.appendChild(child.cloneNode(true));
    }
  }, [iframeRef])

  return (
    <iframe {...props} ref={setIframeRef} width="100%" height="100%" className={css({
      overflow: 'hidden',
      border: 'none'
    })} >
      {mountNode ? createPortal(children, mountNode) : null}
    </iframe>
  )
}