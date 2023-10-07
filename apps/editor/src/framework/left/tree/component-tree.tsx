import React, { useMemo } from "react";
import { Tree } from "antd";
import type { DataNode } from "antd/es/tree";
import { useEditor, SerializedNodes, SerializedNode } from "@craftjs/core";

export const ComponentTree: React.FC = () => {
  const { query } = useEditor();

  const treeNode = query.getSerializedNodes();

  const nodes = React.useMemo(() => {
    function convertJSONToTreeData(jsonData: SerializedNodes) {
      const treeData: DataNode[] = [];

      function traverse(node: SerializedNode, parent: string) {
        const { displayName, nodes, linkedNodes } = node;
        const value = linkedNodes[parent] || parent;

        const newNode: any = {
          title: displayName,
          value,
        };

        if (nodes.length > 0) {
          newNode.children = [];
          nodes.forEach((child) => {
            newNode.children.push(traverse(jsonData[child], child));
          });
        }

        return newNode;
      }

      treeData.push(traverse(jsonData.ROOT, "ROOT"));
      return treeData;
    }
    return convertJSONToTreeData(treeNode);
  }, [treeNode]);


  return (
    <div>
      <Tree
        defaultExpandedKeys={["ROOT"]}
        defaultExpandParent
        blockNode
        treeData={nodes}
      />
    </div>
  );
};
