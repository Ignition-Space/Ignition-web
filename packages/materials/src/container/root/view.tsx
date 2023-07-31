import React from 'react'

export interface RootViewProps {
  children?: React.ReactNode
}

export const RootView: React.FC<RootViewProps> = (props) => {
  return (
    <div >
      {props.children}
    </div>
  )
}