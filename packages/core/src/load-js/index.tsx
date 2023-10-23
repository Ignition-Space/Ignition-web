export const createContainer = (): HTMLIFrameElement => {
  let iframe: HTMLIFrameElement = document.querySelector("#LoadJSVM")!
  if (!iframe) {
    iframe = document.createElement('iframe');
    iframe.setAttribute('sandbox', 'allow-same-origin allow-scripts');
    iframe.style.display = 'none'
    iframe.id = "LoadJSVM"
    document.documentElement.appendChild(iframe);
  }

  return iframe
}

const getWindowKeys = (__window: Window) => {
  return Object.keys(__window)
}

export const loadJSModule = (url: string) => {

  // 创建执行容器
  const ctx = createContainer()

  // 加载js

  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.setAttribute('src', url)

    // 执行过程中发生错误
    window.addEventListener('error', (evt) => {
      resolve(false)
    })

    // 加载成功
    script.onload = () => {
      resolve(true)
    }

    // 链接加载失败
    script.onerror = (_event: Event | string, _source?: string, _lineno?: number, _colno?: number, error?: Error) => {
      resolve(false)
    };

    // 添加到 iframe 里面
    ctx.contentDocument!.body.appendChild(script);
  })
}