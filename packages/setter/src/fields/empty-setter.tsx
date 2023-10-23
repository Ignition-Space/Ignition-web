import React from 'react'

export interface EmptySetterProps {
  children?: React.ReactNode;
}

export const EmptySetter: React.FC<EmptySetterProps> = ({ children }) => {

  const isEmpty = React.Children.count(children) <= 1


  return (
    isEmpty ? 1 : children
  )
}