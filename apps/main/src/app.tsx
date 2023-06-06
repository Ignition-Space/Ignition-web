import React from 'react';
import { ConfigProvider } from 'antd'
import 'antd/dist/reset.css'

export function useQiankunStateForSlave() {
  const [globalState, setGlobalState] = React.useState<any>({
    slogan: 'Hello MicroFrontend',
  });
 
  return {
    globalState,
    setGlobalState,
  };
}

export const qiankun = {
  apps: [
    {
      name: 'editor',
      entry: '//localhost:5101',
    },
  ],
};

export function rootContainer (container: React.ReactNode) {
  return (
    <ConfigProvider>
      {container}
    </ConfigProvider>
  )
}
