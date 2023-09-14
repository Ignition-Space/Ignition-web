import React from "react"
import { Resizable } from 're-resizable'

export interface ResizeBoxProps {
  children?: React.ReactNode
}

export const ResizeBox: React.FC<ResizeBoxProps> = (props) => {
  return (
    <Resizable>
      {props.children}
    </Resizable>
  )
}