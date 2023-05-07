import RenderJSONView from 'react-json-view'

const data = {
  a: 1
}

export const DataState = () => {
  return (
    <RenderJSONView
      displayDataTypes
      collapseStringsAfterLength={15}
      enableClipboard={false}
      iconStyle='square'
      indentWidth={2}
      src={{
			  a: 1
      }}
    />
  )
}
