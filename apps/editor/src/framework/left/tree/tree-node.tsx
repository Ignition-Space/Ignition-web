import { DragOutlined } from "@ant-design/icons";
import { HuosRemixIcon } from "@huos/icons";
import { useHover } from "ahooks";
import { Button, Flex, Space, Typography } from "antd";
import React from "react";

export interface TreeNodeProps {
  nodeId: string;
  name: string;
  isSubMenu?: boolean;
}

export const TreeNode: React.FC<TreeNodeProps> = (props) => {
  const target = React.useRef(null);

  const hover = useHover(target);

  return (
    <Flex ref={target} justify="space-between">
      <Space size={4} >
        {
          props.isSubMenu ? <Button type="text" size="small" icon={<HuosRemixIcon type="icon-arrow-down-s-line" />} /> : null
        }
        <Typography.Text>{props.name}</Typography.Text>
      </Space>
      <Flex justify="flex-end" hidden={!hover}>
        {/* <DeleteOutlined/> */}
      </Flex>
    </Flex>
  );
};
