import React from "react";
import { Badge, Button, Flex, Modal, Typography, theme } from "antd";
import { JsEditor } from "@/framework/common/code-editor/js";
import { css } from "@emotion/css";
import { ClearOutlined, CloseOutlined, EditOutlined } from "@ant-design/icons";
import { useDebounceFn } from "ahooks";

const defaultCode = `function () {
  console.log(1)
}`;

const classes = {
  action: css({
    paddingInline: theme.getDesignToken().paddingXS,
    paddingBlockEnd: theme.getDesignToken().paddingXS,
    borderBottom: `1px solid ${theme.getDesignToken().colorBorderSecondary}`,
  }),
};

export const FunctionEditModal: React.FC<{
  value?: string;
  onChange?: any;
  eventName?: string;
  eventMark?: string;
}> = (props) => {

  const [editing, setEditing] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const { run: runOnChange } = useDebounceFn((v) => {
    props.onChange(v);
    setEditing(false);
  });

  const handleClose = () => {
    console.log("handleClose");
    setOpen(false);
  };

  return (
    <>
      <Button
        type="text"
        icon={<EditOutlined />}
        onClick={() => setOpen(true)}
      ></Button>
      <Modal
      width={750}
        closable={false}
        open={open}
        onCancel={handleClose}
        styles={{
          content: {
            paddingBlock: theme.getDesignToken().paddingXS,
            paddingInline: 0,
          },
        }}
        footer={null}
      >
        <Flex vertical gap={theme.getDesignToken().paddingXS}>
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
              <Typography.Text type="secondary">
                props.{props.eventName}
              </Typography.Text>
              <Typography.Text type="secondary">
                ({props.eventMark})
              </Typography.Text>
            </Flex>
            <Flex gap={4}>
              <Button type="text" size="small" icon={<ClearOutlined />} />
              <Button
                type="text"
                size="small"
                icon={<CloseOutlined />}
                onClick={handleClose}
              />
            </Flex>
          </Flex>
          <JsEditor
            value={props.value}
            defaultValue={defaultCode}
            height={400}
            onChange={(v) => {
              setEditing(true);
              runOnChange(v);
            }}
          />
        </Flex>
      </Modal>
    </>
  );
};

FunctionEditModal.defaultProps = {
  eventMark: "自定义事件",
};
