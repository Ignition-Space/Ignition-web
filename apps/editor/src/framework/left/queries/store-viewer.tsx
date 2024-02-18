import { css } from "@emotion/css";
import { useCreateStore } from "@huos/core";
import _ from "lodash";
import { Button, Flex, Popover, App, Alert, Typography, Divider, theme } from "antd";
import { EditOutlined, KeyOutlined, RestOutlined } from "@ant-design/icons";
import { CodeEditor } from "@/framework/common/code-editor";
import { useSchema } from "@/framework/stores/useSchema";
import React from "react";
import { useBoolean } from "ahooks";
import JsonView from 'react18-json-view'
import "react18-json-view/src/style.css";

const classes = {
  queries: css({
    padding: theme.getDesignToken().paddingXXS
  }),
  content: css({
    width: 300,
  }),
  footer: css({
    padding: 12,
  }),
};

export const StoreViewer = () => {
  const { data, refs } = useCreateStore();
  const { onChange: onChangeSchema, storeMap } = useSchema();
  const [storeMapStr, setStoreMapStr] = React.useState<string>();
  const [open, { set: setOpen }] = useBoolean(false);
  const [errorStr, setErrorStr] = React.useState("");
  const { message } = App.useApp();

  const resetStoreMapStr = () => {
    try {
      const str = JSON.stringify(storeMap, null, 2);
      setStoreMapStr(str);
    } catch (error: any) {
      if (error?.message) {
        setErrorStr(error?.message);
      }
    }
  };

  const onChangeDefaultStoreMapValue = () => {
    try {
      if (storeMapStr) {
        const newStoreMap = JSON.parse(storeMapStr);
        onChangeSchema("storeMap", newStoreMap);
      } else {
        onChangeSchema("storeMap", {});
      }
      message.success("转换成功");
    } catch (error: any) {
      if (error?.message) {
        setErrorStr(error?.message);
      }
    }
  };

  return (
    <div className={classes.queries}>
      <JsonView
        enableClipboard={false}
        editable={false}
        src={data}
        theme="atom"
        collapseStringMode="address"
        collapseStringsAfterLength={12}
        style={{
          fontSize: '85%'
        }}
      />
      <JsonView
        editable={false}
        enableClipboard={false}
        src={refs}
        theme="atom"
        collapseStringMode="address"
        collapseStringsAfterLength={12}
        style={{
          fontSize: '85%'
        }}
      />
      <Popover
        placement="rightTop"
        arrow={false}
        trigger={["click"]}
        overlayInnerStyle={{
          paddingInline: 0,
          paddingBlock: 0,
        }}
        open={open}
        onOpenChange={(_open) => {
          setOpen(_open);
          if (_open) {
            try {
              const str = JSON.stringify(storeMap, null, 2);
              setStoreMapStr(str);
            } catch (error: any) {
              if (error?.message) {
                setErrorStr(error?.message);
              }
            }
          } else {
            setStoreMapStr(undefined);
            setErrorStr("");
          }
        }}
        content={
          <Flex vertical className={classes.content}>
            {errorStr ? (
              <Alert
                banner
                showIcon
                type="error"
                message={
                  <Typography.Text ellipsis={{
                    tooltip: errorStr
                  }} type="danger">
                    {errorStr}
                  </Typography.Text>
                }
              />
            ) : null}
            <Flex style={{ marginTop: 12 }}>
              <CodeEditor
                width={300}
                height={300}
                language="json"
                value={storeMapStr}
                onChange={(v) => setStoreMapStr(v)}
              />
            </Flex>
            <Divider style={{ margin: 0 }} />
            <Flex
              justify="center"
              align="center"
              gap={12}
              className={classes.footer}
            >
              <Button size="small" icon={<RestOutlined />} onClick={resetStoreMapStr}>
                重置
              </Button>
              <Button
                type="primary"
                size="small"
                icon={<KeyOutlined />}
                onClick={onChangeDefaultStoreMapValue}
              >
                确认
              </Button>
            </Flex>
          </Flex>
        }
      >
        <Button block ghost size="small" type="primary" icon={<EditOutlined />}>
          修改默认状态
        </Button>
      </Popover>
    </div>
  );
};
