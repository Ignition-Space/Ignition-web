import { Flex } from 'antd'
import { MaterialGroup } from './group'
import * as __baseMaterias__ from "@/framework/components";
import * as __antDesignMaterias from "@/framework/components/design/antd";

export const MaterialList = () => {
  return (
    <Flex vertical gap={12}  >
      <MaterialGroup groupName='基础组件' groupList={__baseMaterias__} />
      <MaterialGroup groupName='蚂蚁体系' groupList={__antDesignMaterias} />
    </Flex>
  )
}