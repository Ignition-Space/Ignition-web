import React from 'react'
import {
  ProCard,
  ProForm,
  ProFormItem,
  ProFormList,
  ProFormText,
} from "@ant-design/pro-components";
import { useEditor } from "@craftjs/core";
import { AutoComplete, Form } from "antd";
import { getHuosScopeJsModule } from '@huos/core';
import { useSchema } from '../stores/useSchema';
import { filter, omit } from 'lodash';
import { toOptions } from '@huos/setter';

const defaultOptions = [
  {
    label: "(onClick)点击事件",
    value: "onClick",
  },
  {
    label: "(onChange)修改事件",
    value: "onChange",
  },
];

export const MountEvents = () => {


  const [form] = Form.useForm<any>();
  const [methodOptions, setMethodOptions] = React.useState<any[]>([])

  const {
    id: nodeId,
    events,
    actions,
  } = useEditor((state) => {
    const [currentNodeId] = state.events.selected;

    if (currentNodeId) {
      const { data } = state.nodes[currentNodeId];

      return {
        id: currentNodeId,
        events: data.props?.__events
      };
    }
  });

  const handleBindEventChange = (_: any, allValues: any) => {
    console.log(allValues, _, 'allValues')
    
    actions.setProp(nodeId, (setterProps) => {
      setterProps.__events = allValues.events
    })
  }

  // 当前编辑的组件发生改变，nodeId副作用更新了
  React.useEffect(() => {
    if (nodeId) {

      /** 切换组件清除setter配置 */
      form.resetFields()


      /** 设置新组件内容属性配置 */
      console.log(nodeId, events, 'events')
      form.setFieldsValue({
        events
      })

      console.log()
    }
  }, [nodeId])

  const handleOnMoudleSearch = (searchVal: string) => {
   try {
    console.log('handleOnMoudleSearch')
    const jsMoudle =  getHuosScopeJsModule() || {}
    console.log(Object.keys(jsMoudle), 'handleOnMoudleSearch')
    const moudleKeys = Object.keys(jsMoudle)

    const optionkeys = filter(moudleKeys, (key: string) => key.includes(searchVal))

    setMethodOptions(toOptions(optionkeys))
   } catch (error) {
    console.log(error)
   }
  }

  return (
    <ProForm
      style={{
        height: "100%",
      }}
      layout="horizontal"
      onValuesChange={handleBindEventChange}
      submitter={false}
      form={form}
    >
      <ProFormList
        name="events"
        tooltip="在这里可以为当前组件绑定相关的注册事件和自定义函数"
        creatorButtonProps={{
          creatorButtonText: "添加事件",
        }}
        copyIconProps={{
          tooltipText: "复制此项到末尾",
        }}
        deleteIconProps={{
          tooltipText: "不需要这行了",
        }}
        itemRender={({ listDom, action }, meta) => {
          console.log(meta, "meta");
          return (
            <ProCard
              collapsible
              defaultCollapsed={true}
              bordered
              size="small"
              title={`事件${meta.index + 1}`}
              style={{ marginBlockEnd: 8 }}
              extra={action}
              bodyStyle={{ paddingBlockEnd: 0 }}
            >
              {listDom}
            </ProCard>
          );
        }}
        creatorRecord={{
          eventName: "handle$Event",
        }}
      >
        <ProFormItem style={{ padding: 0 }}
          name="eventName"
          label="事件名称" >
          <AutoComplete onSearch={handleOnMoudleSearch} options={methodOptions}  />
        </ProFormItem>
        {/* <ProFormText
          style={{ padding: 0 }}
          width="md"
          name="eventName"
          label="事件名称"
        /> */}
        <ProFormItem style={{ padding: 0 }}
          name="propName"
          label="绑定事件"
           >
          <AutoComplete options={defaultOptions} />
        </ProFormItem>
      </ProFormList>
    </ProForm>
  );
};
