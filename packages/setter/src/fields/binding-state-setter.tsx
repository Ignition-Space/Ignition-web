import React from "react";
import { Button, message } from "antd";
import { ModalForm } from "@ant-design/pro-components";
import ReactMonacoEditor from "react-monaco-editor";
import type {  OnMount } from "@monaco-editor/react";
import { HuosRemixIcon } from "@huos/icons";

type ReactMonacoEditorProps = React.ComponentProps<typeof ReactMonacoEditor>;

export interface BindingStateSetterProps {
  namePath: string;
  onChange?: (value: any) => void,
  value?: any;
  isBinding: boolean;
}

const editorOptions: ReactMonacoEditorProps["options"] = {
  overviewRulerLanes: 0,
  // 控制在输入特定字符后是否接受建议
  acceptSuggestionOnCommitCharacter: true,
  contextmenu: true,
  formatOnPaste: true,
  lineNumbers: "off",
};

export const BindingStateSetter: React.FC<BindingStateSetterProps> = (props) => {

  const editorRef = React.useRef<Parameters<OnMount>[0]>();


  // handle modal submit binding.
  const handleBindingState   = async () => {
    
    // get editor jse code.
    const code = editorRef.current?.getValue()

    if (props.onChange) {
      if (code?.length && code.length > 0) {
        props.onChange(code)
      } else {
        message.error("暂无内容，请编写您的表达式或者是绑定的状态。");
      }
    }
  }

  return (
    <ModalForm
      title="绑定属性"
      trigger={
        <div>
          <Button
            type={props.isBinding ? 'primary' : 'default'}
            icon={<HuosRemixIcon type="icon-capsule-line" />}
          />
        </div>
      }
      onFinish={handleBindingState}
    >
      <ReactMonacoEditor
        height={500}
        language="javascript"
        options={editorOptions}
        editorDidMount={(editor) => {
          // bind editor ref.current
          editorRef.current = editor
        }}
      />
    </ModalForm>
  );
};
