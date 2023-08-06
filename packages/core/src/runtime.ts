export interface ExecuteResult {
  value: any,
  error: any,
  success: boolean;
}


export type InjectVMVarsType = Record<string, unknown>


interface IBrowserRuntimeVMWindow extends Window {
  __INJECT_VARS__?: InjectVMVarsType;
  eval: typeof window.eval
}

class BrowserRuntimeVM {
  
  private iframe: HTMLIFrameElement | null = null;

  constructor () {
    this.iframe = document.createElement('iframe');
    this.iframe.setAttribute('sandbox', 'allow-same-origin allow-scripts');
    this.iframe.style.display = 'none';
    document.documentElement.appendChild(this.iframe);
  }

  private executeCode(code: string, globalScope: InjectVMVarsType) {
    if (!this.iframe) {
      this.iframe = document.createElement('iframe');
      this.iframe.setAttribute('sandbox', 'allow-same-origin allow-scripts');
      this.iframe.style.display = 'none';
      document.documentElement.appendChild(this.iframe);
    }
    const sandbox = this.iframe.contentWindow as IBrowserRuntimeVMWindow
    sandbox.__INJECT_VARS__ = globalScope;

    return sandbox.eval(`
      (() => {
        with (window.__INJECT_VARS__) { 
          return (${code})
        }
      })()
    `);
  }

  public execute(code: string, globalScope: InjectVMVarsType) {
    try {
      const value = this.executeCode(code, globalScope);
      return { value, success: true };
    } catch (err) {
      return { success: false, error: err, value: null };
    }
  }
}

export const browserRuntimeVM = new BrowserRuntimeVM()
