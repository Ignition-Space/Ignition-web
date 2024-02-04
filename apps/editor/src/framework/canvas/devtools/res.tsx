import { CodeEditor } from '@/framework/common/code-editor';
import { ProForm } from '@ant-design/pro-components';
import { theme } from 'antd';
import React from 'react'
import SplitPane, { SashContent, Pane } from 'split-pane-react';

const defaultValue = ["() => {", "  ", "}"].join('\n')

export const Response = () => {
 
  const [sizes, setSizes] = React.useState<Array<string | number>>([
    "50%",
    "50%",
  ]);

  return (
    <SplitPane
        split="horizontal"
        sizes={sizes}
        onChange={setSizes}
        sashRender={(_, active) => (
          <SashContent active={active} type="vscode" />
        )}
      >
        <Pane minSize="25%" style={{ overflow: 'auto' }} >
          <ProForm.Item>
            <CodeEditor defaultValue={defaultValue} height={300} language="typescript" />
          </ProForm.Item>
        </Pane>
        <Pane minSize="25%" style={{ 
          borderTop: `1px solid ${theme.getDesignToken().colorBorderSecondary}`,
         }} >
          222
        </Pane>
      </SplitPane>
  );
}