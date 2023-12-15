import { DragOutlined } from "@ant-design/icons";
import { useEditor } from "@craftjs/core";
import { HuosRemixIcon } from "@huos/icons";
import { useHover } from "ahooks";
import { Button, Flex, Space, Typography } from "antd";
import React from "react";

export interface TreeNodeProps {
  nodeId: string;
}

export const TreeNode: React.FC<TreeNodeProps> = (props) => {
  const {
    query: { node },
  } = useEditor();

  const NodeHelper = node(props.nodeId).get();

  const NodeIcon = NodeHelper.related?.icon;

  console.log(NodeHelper, "NodeHelper");

  return (
    <Flex gap={4} >
      {NodeIcon ? React.cloneElement(<NodeIcon/>) : null}
      {NodeHelper.data.displayName}
    </Flex>
  );
};
