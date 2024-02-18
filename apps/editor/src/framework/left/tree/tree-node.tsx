import React from "react";
import { useEditor } from "@craftjs/core";
import { Flex, Typography } from "antd";

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
      <Flex gap={4} >
        <Typography.Text>{NodeHelper.data.displayName}</Typography.Text>
        <Typography.Text style={{ fontSize: '90%' }} type="secondary" >({props.nodeId})</Typography.Text>
      </Flex>
    </Flex>
  );
};
