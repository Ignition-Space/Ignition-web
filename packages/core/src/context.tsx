import * as React from 'react'

export interface FrameworkProviderProps {
  children?: React.ReactNode;
  enable?: boolean;
}

export const FrameworkContext = React.createContext<FrameworkProviderProps | null>(null);

