import { ReactMaterialViewType } from "@huos/core";
import { ConfigProvider } from '@arco-design/web-react'
import React from 'react';


export const ProviderView: ReactMaterialViewType<React.CSSProperties & {
  children: React.ReactNode;
}> = ({
  children,
  ...props
}, ref: any) => {

  return (
    <ConfigProvider>
      <div ref={ref} style={{ ...props }} >
        {children}
      </div>
    </ConfigProvider>
  );
};
