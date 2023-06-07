import * as React from 'react'

export interface FrameworkProviderProps {
  children?: React.ReactNode;
  enable?: boolean;
  schema?: string;
}

export const FrameworkContext = React.createContext<FrameworkProviderProps | null>({
  enable: true
});

