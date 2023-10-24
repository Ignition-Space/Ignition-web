import { connectJsRuntimeVM, InjectVMVarsType, BrowserRuntimeVMScopeType } from "./iframe";
export * from "./iframe";


export interface ExecuteResult {
  value: any;
  error: any;
  success: boolean;
}

interface IBrowserRuntimeVMWindow extends Window {
  // 插入的上下文
  __INJECT_VARS__?: InjectVMVarsType;

  // 日志打印函数
  logger: typeof console;

  // eval的函数声明
  eval: typeof window.eval;

  // huos
  huosScope: BrowserRuntimeVMScopeType
}

/**
 *
 * @param code 执行的同步代码
 * @param globalScope 全局Scope实例
 */
const handleExecuteEvalCode = (
  code: string,
  gloabalScope?: InjectVMVarsType
) => {
  try {
    const sandbox = connectJsRuntimeVM()
      .contentWindow as IBrowserRuntimeVMWindow;

    sandbox.__INJECT_VARS__ = gloabalScope;

    const value = sandbox.eval(`
        (() => {
          with (window.__INJECT_VARS__) {
            return (${code})
          }
        })()
      `);

    return { value, success: true, error: null } as ExecuteResult;
  } catch (error) {
    return { success: false, error, value: null } as ExecuteResult;
  }
};

const handleInstallNpm = (packageName: string, cdnUrl?: string) => {
  
}

export const jsRuntime = {
  execute: handleExecuteEvalCode,
};
