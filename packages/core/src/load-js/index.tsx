export const createContainer = () => {
  let iframe: HTMLIFrameElement = document.querySelector("#LoadJSVM")!
  if (!iframe) {
    iframe = document.createElement('iframe');
    iframe.setAttribute('sandbox', 'allow-same-origin allow-scripts');
    iframe.style.display = 'none'
    document.documentElement.appendChild(iframe);
  }
}