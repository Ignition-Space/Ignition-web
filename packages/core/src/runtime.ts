import { difference } from "lodash";
import { createRuntmieContext, ScopeMoudleId } from "./utils";

export interface ExecuteResult {
  value: any;
  error: any;
  success: boolean;
}

export type InjectVMVarsType = Record<string, unknown>;

interface IBrowserRuntimeVMWindow extends Window {
  __INJECT_VARS__?: InjectVMVarsType;
  logger: typeof console;
  eval: typeof window.eval;
  '__HuoSBuilderScope__': any
}

class BrowserRuntimeVM {
  /** 运行时容器实例 */
  private iframe: HTMLIFrameElement;

  constructor() {
    this.iframe = createRuntmieContext()!;
  }

  /**
   * 垫片实例
   */
  private onGasketInstance = async () => {
    if (!this.iframe) {
      this.iframe = createRuntmieContext()!;
    }
  };

  /**
   *
   * @param code 执行的同步代码
   * @param globalScope 全局Scope实例
   */
  private onEvalCode(code: string, globalScope: InjectVMVarsType) {
    this.onGasketInstance();

    const sandbox = this.iframe.contentWindow as IBrowserRuntimeVMWindow;
    sandbox.__INJECT_VARS__ = globalScope;
    sandbox[ScopeMoudleId] = (window as any).__HuoSBuilderScope__

    return sandbox.eval(`
        (() => {
          with (window.__INJECT_VARS__) {
            return (${code})
          }
        })()
      `);
  }

  public execute(code: string, globalScope?: InjectVMVarsType) {
    try {
      const value = this.onEvalCode(code, {
        ...globalScope,
      });
      return { value, success: true, error: null } as ExecuteResult;
    } catch (err) {
      return { success: false, error: err, value: null } as ExecuteResult;
    }
  }

  public async loadJS(url: string) {
    this.onGasketInstance();

    const contentWindow = this.iframe.contentWindow!;
    const contentDocument = this.iframe.contentDocument!;

    return new Promise((resolve, reject) => {
      // 先查一遍，看看是否存在已经加载的script
      const matchingElements = contentDocument.querySelectorAll(
        `script[src="${url}"]`
      );

      if (matchingElements.length > 0) {
        resolve(true);
      } else {
        const saveWindowKeys = Object.keys(contentWindow)
        const script = contentDocument.createElement("script");

        script.setAttribute("src", url);

        // 执行过程中发生错误
        contentWindow.addEventListener("error", (evt) => {
          resolve(false);
        });

        script.onload = () => {
          console.log("加载成功: ", url);
          const curWindowKeys = Object.keys(contentWindow)
          const diffKey = difference(curWindowKeys, saveWindowKeys)
          console.log(curWindowKeys.length, saveWindowKeys.length, diffKey, '比对window的长度')
          resolve(true);
        };

        script.onerror = () => {
          resolve(false);
        };

        // 添加到 iframe 里面
        this.iframe.contentDocument!.head.appendChild(script);
      }
    });
  }
}

export const jsRuntime = new BrowserRuntimeVM();
