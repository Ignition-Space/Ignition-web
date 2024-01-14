import { ExclamationCircleOutlined } from "@ant-design/icons";
import { css } from "@emotion/css";
import { Button, Flex, Space, theme, Tag, Typography, message } from "antd";
import CodeEditor from "@uiw/react-textarea-code-editor";
import React from "react";
import { useFocusWithin } from "ahooks";
import { ProFormItem, ProFormItemProps } from "@ant-design/pro-components";

export interface BindPrototypeManageProps {
  value?: any;
  onChange?: any;
}

export const PrototypeManage: React.FC<BindPrototypeManageProps & ProFormItemProps["fieldProps"]> = ({
  value,
  onChange: onChangeValue,
  ...props
}) => {
  const { token } = theme.useToken();
  const ref = React.useRef(null);
  const isFocusWithin = useFocusWithin(ref, {});

  return (
    <Flex
      ref={ref}
      vertical
      className={css({
        position: "relative",
      })}
    >
      <CodeEditor
        value={value?.$$jsx}
        language="js"
        placeholder={props?.placeholder}
        padding={6}
        onChange={(e) =>
          onChangeValue({
            $$jsx: e.target.value,
          })
        }
        style={{
          maxHeight: 30,
          width: "100%",
          background: "#FFF",
          border: `1px solid ${token.colorBorderSecondary}`,
          borderRadius: 6,
          fontFamily:
            "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
        }}
      />
      <Flex
        vertical
        className={css({
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          background: "#FFF",
          zIndex: token.zIndexPopupBase,
          display: isFocusWithin ? "inline-block" : "none",
        })}
      >
        <Flex
          vertical
          gap={6}
          className={css({
            background: "#FFF",
            borderRadius: 6,
            border: `1px solid ${token.colorBorderSecondary}`,
          })}
        >
          <CodeEditor
            value={value?.$$jsx}
            language="js"
            placeholder={props?.placeholder}
            padding={6}
            onChange={(e) =>
              onChangeValue({
                $$jsx: e.target.value,
              })
            }
            style={{
              width: "100%",
              background: "transparent",
              fontFamily:
                "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
            }}
          />
          <Flex
            className={css({
              paddingInline: 10,
              paddingBlockEnd: 10,
            })}
            gap={6}
          >
            <Tag style={{ margin: 0 }}>
              <Space>
                <ExclamationCircleOutlined />
                <Typography.Text>表达式</Typography.Text>
              </Space>
            </Tag>
            <Button
              size="small"
              onClick={() => message.success("尽情期待。。。")}
            >
              状态
            </Button>
            <Button size="small">国际化</Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export const BindPrototypeManage: React.FC<ProFormItemProps> = (props) => (
  <ProFormItem {...props}>
    <PrototypeManage placeholder={`请输入${props.label}`} {...props.fieldProps} />
  </ProFormItem>
);
