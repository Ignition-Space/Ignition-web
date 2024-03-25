import React from "react";
import { createReactMaterial } from "@huos/core";
import {
  BooleanSetter,
  RenderFieldSetter,
  StringSetter,
  toOptions,
} from "@huos/setter";
import { Segmented, Select, Typography } from "antd";

const levelOptions = [1, 2, 3, 4, 5].map((level) => ({
  label: 'H' + level,
  vlaue: level
}))


type TitleProps = React.ComponentType<typeof Typography.Title> & {
  compoentType?: 'Text' | 'Link' | 'Title' | 'Paragraph'
}

export const MUI_Title = createReactMaterial<TitleProps>(
  (props: TitleProps, ref: any) => (
    <Typography.Title ref={ref} {...props} />
  ),
  {
    displayName: "标题",
    related: {
      settingRender: () => (
        <React.Fragment>
          <RenderFieldSetter isExpression={false} name="componentType" label="组件类型" initialValue="Text" >
            <Segmented options={[
              {
                label: '文本',
                value: 'Text',
              },
              {
                label: '标题',
                value: 'Title',
              },
              {
                label: '链接',
                value: 'Link'
              },
              {
                label: '省略',
                value: 'Paragraph'
              }
            ]} />
          </RenderFieldSetter>
          <RenderFieldSetter name="level" label="标题等级"  initialValue={1} >
            <Segmented options={toOptions(['1', '2', '3', '4', '5'])} />
          </RenderFieldSetter>
          <BooleanSetter name="copyable" label="复制按钮" />
          <BooleanSetter name="delete" label="删除线" />
          <BooleanSetter name="disable" label="禁用文本" />
          <BooleanSetter name="ellipsis" label="溢出省略" />
          <BooleanSetter name="mark" label="标记样式" />
          <BooleanSetter name="italic" label="字体倾斜" />
          <BooleanSetter name="underline" label="下划线" />
          <RenderFieldSetter name="type" label="类型" >
            <Select style={{ width: '100%' }} options={toOptions(["secondary", 'success', 'warning', 'danger'])}/>
          </RenderFieldSetter>

        </React.Fragment>
      ),
      icon: () => <img height={30} width={30} src="https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*7va7RKs3YzIAAAAAAAAAAAAADrJ8AQ/original" />
    },
  },
  {
    children: "默认标题",
  }
);
