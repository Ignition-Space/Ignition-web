import { ProFormColumnsType } from "@ant-design/pro-components";
import { BindPrototypeManage } from '@huos/setter'
import { InputNumber } from "antd";


export default [
  {
    title: '块级元素',
    tooltip: '',
    name: ["block"],
    renderFormItem: () => <BindPrototypeManage as={InputNumber}/>
  }
] as ProFormColumnsType[]