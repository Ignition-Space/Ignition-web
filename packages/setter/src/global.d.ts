export interface CustomFormItemFieldProps<T = any> {
  id?: string;
  value?: T,
  onChange?: (val: T) => void
}