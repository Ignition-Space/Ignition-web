import { compileModuleResolve, sucraseTransformCode } from '../builder'
import { connectJsRuntimeVM, InjectVMVarsType } from "./iframe";
import { logger } from '..';

export * from "./iframe";
export * from './scope'


export interface ExecuteResult {
  value: any;
  error: any;
  success: boolean;
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
    const { sandbox } = connectJsRuntimeVM()

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

/**
 * 
 * @param packageName 包名
 * @param cdnUrl 包地址
 */
const handleInstallNpm = async (packageName: string, cdnUrl?: string) => {
  // if (cdnUrl) {
  //   const data = await import(cdnUrl)
  //   console.log(data, 'data')
  // } else {
  //   logger.error("CDN路径不存在")
  // }
}

/**
 * 处理当前模块地址
 * @param code 代码
 */
const handleMountJsMoudle = async (
  code: string,
) => {
  const { sandbox } = connectJsRuntimeVM()
  const cjsCode = await sucraseTransformCode(code)
  if (cjsCode) {
    const module = compileModuleResolve(cjsCode, sandbox.huosScope.depends)
    console.log(module, 'module')
    sandbox.huosScope.jsMoudle = module.exports 
    logger.info("JS模块挂载成功")
  }
}

export const jsRuntime = {
  execute: handleExecuteEvalCode,
  mountJsMoudle: handleMountJsMoudle,
  installNpm: handleInstallNpm
};
