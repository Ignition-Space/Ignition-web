import { transform } from "sucrase";

interface ESMoudleType {
  exports: {
    __esModule: boolean;
    default: any;
    [key: string]: any;
  };
}

/**
 * sucrase 编译器
 * @param code 需要编译的代码,
 */
export const sucraseTransformCode = async (code: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    try {
      // 编译成功的代码，不需要sourceMap
      const buildProduct = transform(code, {
        transforms: ["typescript", "imports", "jsx"],
      }).code;
      resolve(buildProduct);
    } catch (error) {
      // 编译失败
      reject(error);
    }
  });
};

/**
 * babel 的编译器
 * @description 比其他编译会慢一些，但是更加健壮稳定
 * @param code 需要编译的代码,
 */
export const babelTransformCode = async (code: string) => {
  // todo...
  return code;
};

/**
 * wasm容器打包方案
 * @description 激进策略，需要支持wasm, 且加载一个wasm容器。
 * @param code 需要编译的代码,
 */
export const wasmTransformCode = async (code: string) => {
  // todo...
  return code;
};

/**
 * 
 * @param code cjs代码
 * @param dependencies 模块依赖
 */
export const compileModuleResolve = (
  code: string,
  dependencies: Record<string, any> = {}
) => {
  // 实现module函数，用来套动态执行的函数结果
  const module: ESMoudleType = {
    exports: {
      __esModule: false,
      default: null as unknown,
    },
  };

  // 实现一个require方法，用于模块执行时挂载依赖
  const require = (packageName: string) => {
    if (dependencies[packageName]) {
      return dependencies[packageName];
    }
  };
  // 动态执行
  Function("require, exports, module", code)(require, module.exports, module);
  return module;
};

/**
 * 往当前离线容器下注入CssModule，无需构建和编译
 * @param cssLongText 注入的css文本
 */
export const injectCssModule = (cssLongText: string) => {
  const style = document.createElement("style");
  style.innerHTML = cssLongText;
  document.head.appendChild(style);
};
