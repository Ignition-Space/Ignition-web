import Seal, { SvalOptions } from 'sval'


// export function evalCodeSandBox (expression: string, data?: object) {
//     try {
//         let fun: Function = new Function('store', `white(data){ return !!(${expression}); }`)
//         return fun.call(data)
//     } catch (err) {
//         console.log(err, 'throw error form evalCodeSandBox')
//     }
// }

/**
 * @classdesc 为浏览器提供一个动态片段执行的类
 * @description 主要目的是表达式执行和动态逻辑注入
 */
export class BrowserCodeExecVM  {
    private interpreter: Seal
    constructor(private options: SvalOptions = {
        // ECMA Version of the code (5 | 6 | 7 | 8 | 9 | 10 | 2015 | 2016 | 2017 | 2018 | 2019)
        ecmaVer: 9,
        // Whether the code runs in a sandbox
        sandBox: true,
    }) {
        this.interpreter = new Seal(options)
    }
    init () {
        this.interpreter.import({
            __version__: '1.0.0',
            __origin__: 'BrowserCodeExecVM',
            __desc__: '容器基于sval来做，用于执行一些动态的逻辑片段，最好有沙箱隔离。带双下划线的变量都是内部变量，不用理会和引用。生产环境会Remove掉。'
        })
    }

    run(expression: string) {
        try {
            this.interpreter.run(expression)
        } catch (err) {
            console.log(`容器执行失败，代码片段 ：`, expression)
        }
    }
}