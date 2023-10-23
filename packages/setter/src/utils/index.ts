export const toOptions = (values: string[]) => {
  return values.map((value) => ({
    value,
    label: value,
  }))
}