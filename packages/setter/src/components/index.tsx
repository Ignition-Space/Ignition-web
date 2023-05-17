export interface XRenderCustomValue<T = any> {
  value: T;
  onChange: ( v: T ) => void
}