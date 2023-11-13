import { Flex } from 'antd'
import { MaterialGroup } from './group'
import * as __baseMaterias__ from "@/framework/components";
import * as __arcoDesignMaterias from "@/framework/components/design/arco";

export const MaterialList = () => {
  return (
    <Flex vertical gap={12}  >
      <MaterialGroup groupName='基础组件' groupList={__baseMaterias__} />
      <MaterialGroup groupName='arco-design' groupList={__arcoDesignMaterias} />
    </Flex>
  )
}