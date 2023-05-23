import { theme } from 'antd'
export const useTokens = () => {
  const tokens = theme.useToken()
  return tokens
}
