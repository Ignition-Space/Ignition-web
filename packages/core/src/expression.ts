export type CallBack = (math: string, p1?: string, p2?: string) => void

export const isExpression = (str: string): boolean => {
  if (typeof str === 'string') {
    return /{{\s*([^}]+)?\s*}}/g.test(str)
  }
  return false
}

export const parseJsStrToLte = (code: string): string => {

  // 匹配 {{}} 的内容
  const regex = /\{\{(.+?)\}\}/g;
  
  // {{}} -> ${}
  const result = code.replace(regex, '${$1}');

  // 转换成为模板字符串`${a1} ${a2}`格式
  
  return `\`${result}\``;
  
}

export interface parseSetterValType extends Object {
  $$const?: any,
  $$jsx?: string;
  [key: string]: any
}

export const isBindState = (val: parseSetterValType) => {
  return val?.$$const || val?.$$jsx
}