import { Space, Input, Button, Flex, ConfigProvider, AutoComplete } from "antd";
import { FunctionEditModal } from './function-edit-modal'
import { ProForm, ProFormDependency, ProFormItem, ProFormItemRender, ProFormList, ProFormText } from "@ant-design/pro-components";
import { useEditor } from "@craftjs/core";
import { DeleteOutlined } from "@ant-design/icons";
import _ from "lodash";
import { css } from "@emotion/css";

const classes = {
  list: css({
    '& .ant-pro-form-list-container': {
      flex: 1
    },
    '& .ant-pro-form-list-item': {
      justifyContent: 'space-between'
    }
  })
}

export const EventsPanel = () => {

  const {
    id: nodeId,
    events,
    eventMap,
    actions
  } = useEditor((state) => {
    const [currentNodeId] = state.events.selected;

    if (currentNodeId) {
      const { data } = state.nodes[currentNodeId];

      return {
        id: currentNodeId,
        events: data.props?.__events__,
        eventMap: data?.custom?.evetns as Record<string, string> || {}
      };
    }
  });

  console.log(events, 'events')

  return (
    <ConfigProvider theme={{
      components: {
        Form: {
        }
      }
    }} >
      <ProForm submitter={false} onValuesChange={(values, allValues) => {
        actions.setProp(nodeId, (setterProps) => {
          return _.merge(setterProps, values)
        })
      }} >
        <ProFormList
          className={classes.list}
          name="__events__"
          creatorButtonProps={{
            position: "bottom",
            creatorButtonText: '新增事件',
          }}
          actionRender={(field, actions) => [<Button danger type="text" icon={<DeleteOutlined />} onClick={() => {
            actions.remove(field.key)
          }} ></Button>]}
        >
          <Flex gap={12} >
            <ProForm.Item noStyle name="name"  >
              <AutoComplete style={{ width: '100%' }}  placement="bottomLeft" options={_.map(eventMap, (value, key) => ({
                label: value + (key),
                value: key
              }))} allowClear placeholder="请输入事件" />
            </ProForm.Item>
            <ProFormDependency name={["name"]} >
              {({ name }) => {
                return (
                  <ProFormItem name="fn" >
                    <FunctionEditModal eventName={name} eventMark={eventMap?.[name]} />
                  </ProFormItem>
                )
              }}
            </ProFormDependency>
          </Flex>
        </ProFormList>
      </ProForm>
    </ConfigProvider>
  )
}