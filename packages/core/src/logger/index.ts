const logColorMap = {
  log: '#1677FF',
  error: '#FF4D4F',
  warn: '#FAAD14'
} as const

const print = (method: keyof typeof logColorMap, args: any[]) => {

  const logPrefix = [
    "%c" + "huos",
    `background:${logColorMap?.[method]};border-radius: 0.5em;color: white;font-weight: bold;padding: 2px 0.5em`,
  ]

  return console[method](...logPrefix, ...args);
}

export const logger = {
  info: (...args: Parameters<typeof console["log"]>) => print("log", args),
  error: (...args: Parameters<typeof console["error"]>) => print("error", args),
  warn: (...args: Parameters<typeof console["warn"]>) => print("warn", args)
}