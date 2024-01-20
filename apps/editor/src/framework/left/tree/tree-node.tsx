import { useEditor } from "@craftjs/core";
import { Flex } from "antd";
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

  return (
    <Flex gap={4} >
      {NodeIcon ? React.cloneElement(<NodeIcon/>) : null}
      {NodeHelper.data.displayName}
    </Flex>
  );
};
