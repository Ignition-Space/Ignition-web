export function addHttpPrefix(url: string) {
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    url = "//" + url;
  }
  return url;
}

export const getAppendTargetElement = () => {
  const targetNode = document.querySelector("#EditorCanvasFrame") as HTMLIFrameElement

  if (!!targetNode) {
    return targetNode.contentWindow
  }
  return window
}

export const injectHeadScriptElement = (urls: string[]) => {
  const fragment = document.createDocumentFragment(); 
  urls.forEach((url) => {
    const scriptDOM = document.createElement('script')
    scriptDOM.src = addHttpPrefix(url);
    scriptDOM.type = 'text/javascript';
    scriptDOM.async = true;
    scriptDOM.defer = false;
    fragment.appendChild(scriptDOM);
  })

  const targetNode = getAppendTargetElement()
  console.log('useInjectMountJS', targetNode)
  // targetNode?.appendChild(fragment)
}

export const injectHeadLinkElement = (urls: string[]) => {
  const fragment = document.createDocumentFragment(); 
  urls.forEach((url) => {
    const linkDOM = document.createElement('link')
    linkDOM.rel = 'stylesheet';
    linkDOM.href = addHttpPrefix(url);
    fragment.appendChild(linkDOM);
  })

  const targetNode = getAppendTargetElement()
  console.log('useInjectMountCss', targetNode)
  // targetNode?.appendChild(fragment)
}