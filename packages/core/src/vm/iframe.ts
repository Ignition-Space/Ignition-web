export const jsRuntimeCtxId = '__huosRuntimeCtxId__'

export type InjectVMVarsType = Record<string, unknown>;

export interface BrowserRuntimeVMScopeType {
  jsMoudle: InjectVMVarsType;
  depends: InjectVMVarsType
}

const initScopeData: BrowserRuntimeVMScopeType = {
  jsMoudle: {},
  depends:{}
}

/**
 * 连接当前执行上下文实例
 */
export const connectJsRuntimeVM = <T extends HTMLIFrameElement>(initFun: (iframe: T) => void): HTMLIFrameElement => {
  
  let iframe = document.getElementById(jsRuntimeCtxId) as HTMLIFrameElement;
  try {
    if (!iframe) {
      iframe = document.createElement("iframe");
      iframe.setAttribute("sandbox", "allow-same-origin allow-scripts");
      iframe.style.display = "none";
      iframe.id = jsRuntimeCtxId;
      document.documentElement.appendChild(iframe);
    }

    return iframe;
  } catch (error) {
    throw new Error("[huos]: connectJsRuntimeVM fail...")
  }
}