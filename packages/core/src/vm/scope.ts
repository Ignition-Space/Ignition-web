import { connectJsRuntimeVM } from "./iframe"

export const getHuosScopeJsMoudle = () => {
  try {
    const { sandbox } = connectJsRuntimeVM()
    return sandbox.huosScope.jsMoudle
  } catch (error) {
    throw new Error(`getHuosScopeJsMoudle Error...`)
  }
}


export const getHuosScopeDepends = () => {
  try {
    const { sandbox } = connectJsRuntimeVM()
    return sandbox.huosScope.depends
  } catch (error) {
    throw new Error(`getHuosScopeDepends Error...`)
  }
}