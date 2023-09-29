import { Editor,EditorProps } from '@monaco-editor/react'

export const CodeEditor: React.FC<EditorProps> = (props) => {
  return (
    <Editor {...props} />
  )
}