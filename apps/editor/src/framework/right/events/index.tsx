import React from "react";
import {
  Button,
  Flex,
  Collapse,
  ConfigProvider,
  Form,
  Input,
} from "antd";
import {
  CaretDownOutlined,
  CaretUpOutlined,
  CloseOutlined,
  EditOutlined,
} from "@ant-design/icons";
import _, { merge } from "lodash";
import { css } from "@emotion/css";
import { ExpressionModal } from "@huos/setter";
import { useEditor } from "@craftjs/core";
import { useDebounceFn } from "ahooks";

export interface IEventType {
  name?: string;
  fn?: string;
}

const classes = {
  list: css({
    width: "100%",

    "& .ant-pro-form-list-container": {
      flex: 1,
    },
    "& .ant-pro-form-list-item": {
      justifyContent: "space-between",
    },
  }),
};

const defaultCode = `function () {
  console.log('hello onMessage...')
}`;

export const EventsPanel = () => {
  const [form] = Form.useForm()

  const {
    id: nodeId,
    actions,
    events,
    currentNodeProps
  } = useEditor((state) => {
    const [currentNodeId] = state.events.selected;

    if (currentNodeId) {
      const { data } = state.nodes[currentNodeId];

      return {
        id: currentNodeId,
        currentNodeProps: data.props,
        events: data.props?.__events__ || [],
      };
    }
  });

  const { run: handleFormChange } = useDebounceFn((_, formData) => {
    const { events } = formData

    if (nodeId) {
      actions.setProp(nodeId, (setterProps) => {
        return merge(setterProps, {
          __events__: events
        })
      })
    }
  })

  console.log(currentNodeProps, 'currentNodeProps')

  // 当前编辑的组件发生改变，nodeId副作用更新了
  React.useEffect(() => {
    if (nodeId) {

      /** 切换组件清除setter配置 */
      form.resetFields()


      /** 设置新组件内容属性配置 */
      form.setFieldsValue({
        events,
      })
    }
  }, [nodeId])

  return (
    <ConfigProvider
      theme={{
        components: {
          Form: {
            itemMarginBottom: 8
          },
        },
      }}
    >
      <Flex vertical className={classes.list}>
        <Form
          form={form}
          onValuesChange={handleFormChange}
        >
          <Collapse
            size="small"
            ghost
            defaultActiveKey={['evnets']}
            expandIconPosition="end"
            expandIcon={(panelProps) => (
              <Flex>
                <Button
                  size="small"
                  type="text"
                  icon={
                    panelProps.isActive ? (
                      <CaretUpOutlined />
                    ) : (
                      <CaretDownOutlined />
                    )
                  }
                />
              </Flex>
            )}
            items={[
              {
                label: "基础事件",
                key: 'evnets',
                children: (
                  <Form.List name="events">
                    {(fileds, actions) => {
                      return (
                        <Flex vertical>
                          {fileds.map((field, index) => (
                            <Flex
                              key={field.key}
                              gap={12}
                              justify="space-between"
                            >
                              <Flex flex={1}>
                                <Form.Item
                                  name={[field.name, "name"]}
                                  rules={[
                                    { required: true, message: "事件名称不能为空" },
                                    ({ getFieldValue }) => ({
                                      validator(_, value) {
                                        let error = false;
                                        if (getFieldValue("events")) {
                                          getFieldValue("events").forEach(
                                            (item: IEventType, i: number) => {
                                              if (
                                                item.name === value &&
                                                index !== i
                                              )
                                                error = true;
                                            }
                                          );
                                        }
                                        return error
                                          ? Promise.reject(
                                              new Error("当前事件已注册")
                                            )
                                          : Promise.resolve();
                                      },
                                    }),
                                  ]}
                                >
                                  <Input
                                    style={{ width: "100%" }}
                                    placeholder="onClick"
                                  />
                                </Form.Item>
                              </Flex>
                              <Flex gap={8} flex="0 0 auto">
                                <Form.Item noStyle name={[field.name, "fn"]}>
                                  <ExpressionModal
                                    defaultCode={defaultCode}
                                    trigger={<Button icon={<EditOutlined />} />}
                                  />
                                </Form.Item>
                                <Button icon={<CloseOutlined />}></Button>
                              </Flex>
                            </Flex>
                          ))}
                          <Button block type="primary" onClick={() => actions.add({
                            name: '',
                            fn: ''
                          })}>
                            新增
                          </Button>
                        </Flex>
                      );
                    }}
                  </Form.List>
                ),
              },
            ]}
          />
        </Form>
      </Flex>
    </ConfigProvider>
  );
};
