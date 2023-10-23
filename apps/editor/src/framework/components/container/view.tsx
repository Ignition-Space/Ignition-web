import { ReactMaterialViewType, CanvasRootId } from "@huos/core";
import { ConfigProvider } from '@arco-design/web-react'
import React from 'react';


export const ProviderView: ReactMaterialViewType<React.CSSProperties & {
  children: React.ReactNode;
}> = ({
  children,
  ...props
}, ref: any) => {

  const iframe = document.getElementById(CanvasRootId) as HTMLIFrameElement

  return (
    <ConfigProvider getPopupContainer={() => iframe.contentDocument?.body || document.body} >
      <div ref={ref} style={{ ...props }} >
        {children}
      </div>
    </ConfigProvider>
  );
};
