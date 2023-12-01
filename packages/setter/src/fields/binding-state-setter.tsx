import React from "react";
import {
  Button,
  Space,
  theme,
  Tooltip,
  message,
  Typography,
  Alert,
  Card,
  Empty,
  Spin,
} from "antd";
import { useEditor } from "@craftjs/core";
import { ModalForm } from "@ant-design/pro-components";
import { FunctionOutlined, CaretRightFilled } from "@ant-design/icons";
import ReactTextareaCodeEditor from "@uiw/react-textarea-code-editor";
import { jsRuntime, ExecuteResult } from "@huos/core";
import { ObjectInspector } from "@devtools-ds/object-inspector";
import { useBoolean, useUpdate } from "ahooks";
import { css } from "@emotion/css";

export interface BindingStateSetterProps {
  namePath: string;
  onChange?: (value: any) => void;
  value?: any;
  isBinding: boolean;
}

const defaultRunValue: ExecuteResult = {
  success: true,
  error: "",
  value: "",
};

const classes = {
  result: css({
    height: 170,
    overflow: "auto",
  }),
};

export const BindingStateSetter: React.FC<BindingStateSetterProps> = (
  props
) => {
  const editorRef = React.useRef<HTMLTextAreaElement>(null!);
  const { token } = theme.useToken();
  const [runValue, setRuntimeValue] =
    React.useState<ExecuteResult>(defaultRunValue);
  const { id, currentNodeProps } = useEditor((state) => {
    const [currentNodeId] = state.events.selected;

    if (currentNodeId) {
      const { data } = state.nodes[currentNodeId];

      return {
        id: currentNodeId,
        currentNodeProps: data.props,
      };
    }
  });
  const [execLoading, { setTrue, setFalse }] = useBoolean(false);
  const update = useUpdate();

  // handle modal submit binding.
  const handleBindingState = async () => {
    // get editor jse code.
    const code = editorRef.current?.value;

    if (props.onChange) {
      if (code?.length && code.length > 0) {
        props.onChange(code);
      } else {
        message.error("暂无内容，请编写您的表达式或者是绑定的状态。");
      }
    }
  };

  const handleEditorChange = () => {
    try {
      setTrue();
      const inputCode = editorRef.current?.value;
      if (inputCode) {
        const result = jsRuntime.execute(inputCode, {
          props: currentNodeProps,
        });
        setRuntimeValue(result);
      } else {
        setRuntimeValue(defaultRunValue);
      }
    } finally {
      setFalse();
      update();
    }
  };

  return (
    <ModalForm
      title="绑定属性"
      trigger={
        <div>
          <Tooltip title="打开属性面板弹窗可以绑定状态" placement="left">
            <Button
              ghost={props.isBinding}
              type={props.isBinding ? "primary" : "dashed"}
              icon={<FunctionOutlined />}
            />
          </Tooltip>
        </div>
      }
      modalProps={{
        okText: "设置",
        destroyOnClose: true,
      }}
      onFinish={handleBindingState}
    >
      <Space style={{ width: "100%" }} direction="vertical">
        <Alert
          banner
          type="info"
          message={
            <Typography.Link>
              使用 JavaScript 表达式使“{props.namePath}”属性绑定状态。
            </Typography.Link>
          }
        />
        <Card
          size="small"
          actions={[
            <Typography.Link key="runtime" onClick={handleEditorChange}>
              <CaretRightFilled />
              运行
            </Typography.Link>,
          ]}
        >
          <ReactTextareaCodeEditor
            ref={editorRef}
            language="javascript"
            placeholder="Please enter JS code."
            minHeight={300}
            padding={0}
            style={{
              fontSize: 14,
              backgroundColor: token.colorBgBase,
              fontFamily:
                "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
            }}
          />
        </Card>
        <Card size="small">
          <Spin tip="运行中..." spinning={execLoading}>
            <div className={classes.result}>
              {runValue.error ? (
                <Typography.Text type="danger">
                  执行失败：
                  {String(runValue.error)}
                </Typography.Text>
              ) : null}
              {runValue.value ? (
                <ObjectInspector
                  key={runValue.value}
                  data={runValue.value}
                  includePrototypes={false}
                  expandLevel={1}
                />
              ) : null}
              {runValue.success && !!runValue.value === false ? (
                <Empty
                  image={Empty.PRESENTED_IMAGE_SIMPLE}
                  description="无运行结果"
                />
              ) : null}
            </div>
          </Spin>
        </Card>
      </Space>
    </ModalForm>
  );
};
