import lz from "lzutf8";

export const stringifyLzUtfData = (json: string): string => {
  return lz.encodeBase64(lz.compress(json))
}
export const parseLzUtfData = (stateToLoad: string): string => {
  return lz.decompress(lz.decodeBase64(stateToLoad))
}