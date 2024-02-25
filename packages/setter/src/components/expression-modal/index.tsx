import React from "react";
import { Badge, Button, Flex, Modal, Typography, theme } from "antd";
import { css } from "@emotion/css";
import { ModalFormProps } from "@ant-design/pro-components";
import { CodeEditor } from "../../common/code-editor";
import { HintPanel } from "./hint-panel";
import { useDebounceFn } from "ahooks";
import { ClearOutlined } from "@ant-design/icons";

const defaultCode = `function () {
  console.log(1)
}`;

const classes = {
  action: css({
    paddingInline: theme.getDesignToken().paddingXS,
    paddingBlockEnd: theme.getDesignToken().paddingXS,
    borderBottom: `1px solid ${theme.getDesignToken().colorBorderSecondary}`,
  }),
  editor: css({
    paddingInline: theme.getDesignToken().paddingXS,
  }),
};

export interface ExpressionModalProps {
  trigger?: React.ReactNode;
  value?: string;
  onChange?: (value: string) => void;
  namePath?: string[]
}

export const ExpressionModal: React.FC<ExpressionModalProps> = (props) => {
  const [editing, setEditing] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [code, setCode] = React.useState<string>()

  const handleClose = () => {
    console.log("handleClose");
    setOpen(false);
  };

  const handleOnChange = (codeStr: string) => {
    setCode(codeStr)
    setEditing(false)
  }

  const onComplete = () => {
    if (props.onChange && code ) {
      props.onChange(code)
      handleClose()
    }
  }

  return (
    <>
      <div
        onClick={() => {
          setOpen(true);
          setCode(props.value)
        }}
      >
        {props.trigger}
      </div>
      <Modal
        width={500}
        closable={false}
        open={open}
        onCancel={handleClose}
        styles={{
          body: {
            paddingBlock: theme.getDesignToken().paddingXS,
            paddingInline: 0,
          },
        }}
        footer={null}
      >
        <Flex vertical>
          <Flex
            justify="space-between"
            align="center"
            className={classes.action}
          >
            <Flex
              align="center"
              style={{ marginInlineStart: theme.getDesignToken().paddingXS }}
              gap={6}
            >
              {editing ? <Badge status="processing" /> : null}
              <Typography.Text type="secondary">props</Typography.Text>
              <Typography.Text type="secondary">/</Typography.Text>
              {
                props.namePath?.map((name) => <Typography.Text key={name} >{name}</Typography.Text>)
              }
              
            </Flex>
            <Flex gap={4}>
              <Button type="text" size="small" icon={<ClearOutlined />} onClick={() => {
                setCode(props.value)
              }} />
              <Button type="primary" size="small" onClick={onComplete}>
                完成
              </Button>
            </Flex>
          </Flex>
          <Flex vertical className={classes.editor}>
            <HintPanel />
            <CodeEditor
              lang="typescript"
              value={code}
              height="200px"
              minHeight="200px"
              maxHeight="300px"
              onChange={handleOnChange}
            />
          </Flex>
        </Flex>
      </Modal>
    </>
  );
};

ExpressionModal.defaultProps = {};
