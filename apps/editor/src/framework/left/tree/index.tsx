import React from "react";
import type { MenuProps } from "antd";
import { ConfigProvider, Menu } from "antd";
import { useSchema } from "@/framework/stores/useSchema";
import { SerializedNodes } from "@craftjs/core";

type MenuItem = Required<MenuProps>["items"][number];

function convertToTree(data: SerializedNodes): MenuItem[] {
  const rootNode = data["ROOT"];
  const tree: MenuItem[] = [];

  function traverse(nodeId: string): MenuItem {
    const node = data[nodeId];
    const { nodes, displayName } = node;

    const treeItem: MenuItem = {
      label: displayName,
      key: nodeId,
      children: nodes.length > 0 ? nodes.map(traverse) : undefined,
    };

    return treeItem;
  }

  if (rootNode) {
    tree.push(traverse("ROOT"));
  }

  return tree;
}

export const Tree = () => {
  const { serializeNodes } = useSchema();

  const ndoeTreeData = React.useMemo(() => {
    if (serializeNodes) {
      console.log(serializeNodes, "serializeNodes");
      return convertToTree(serializeNodes);
    }
    return [];
  }, [serializeNodes]);

  console.log(ndoeTreeData, "ndoeTreeData");

  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            itemHeight: 35,
            itemBorderRadius: 0,
            itemMarginBlock: 0,
            itemMarginInline: 0,
            activeBarBorderWidth: 0,
            itemPaddingInline: 0,
          },
        },
      }}
    >
      <Menu
        items={ndoeTreeData}
        inlineIndent={12}
        expandIcon={null}
      />
    </ConfigProvider>
  );
};
