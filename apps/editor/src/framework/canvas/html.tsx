import React from 'react'
import { DOMInspector } from '@devtools-ds/dom-inspector'
import { css } from '@emotion/css';

const classes = {
  content: css({
    height: '100%',
    overflow: 'auto',
    background: '#FFF',
    padding: 12
  })
}

export const HTMLDOMDocument = () => {
  const htmlRef = React.useRef<any>(null!);
  const [refresh, setRefresh] = React.useState(0)


  React.useEffect(() => {
    const canvasDOM = document.querySelector("#EditorCanvasFrame") as any 
    const iframeDocument = canvasDOM.contentDocument || canvasDOM?.contentWindow.document;
    htmlRef.current = iframeDocument.documentElement;
    setRefresh(new Date().getTime())
  }, [])

  return (
   <div className={classes.content} >
     <DOMInspector data={htmlRef.current} expandLevel={2} />
   </div>
  )
}