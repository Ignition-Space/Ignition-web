import React from 'react'
import { Space, Checkbox, Link, Tree, Popover } from "@arco-design/web-react";
import { IconDragDotVertical, IconDragArrow } from "@arco-design/web-react/icon";
import { clone, update } from 'lodash';

const TreeNode = Tree.Node;

export interface ControlProps {
  columns: any[];
  onChange: (showKeys: string[], sortKeys: string[]) => void
}

export const Control: React.FC<ControlProps> = (props) => {

  const [checkedKeys, setCheckedKeys] = React.useState<string[]>([])
  const [sortKeys, setSortKeys] = React.useState<string[]>([])


  const allKeys = React.useMemo(() => {
    return props.columns.map(e => e.dataIndex)
  }, [props.columns])

  const handleCheckAllTreeNode = (checked: boolean) => {
    if (checked) {
      setCheckedKeys(allKeys)
    } else {
      setCheckedKeys([])
      
    }
  }

  React.useEffect(() => {
    setCheckedKeys(allKeys)
    setSortKeys(allKeys)
  }, [allKeys])

  React.useEffect(() => {
    props.onChange(checkedKeys, sortKeys)
  }, [checkedKeys, sortKeys])

  return (
    <Popover
      position="bottom"
      title={null}
      content={
        <Space style={{ width: '100%' }} direction="vertical">
          <Space style={{ width: '100%' }} >
            <Checkbox checked={props.columns.length === checkedKeys.length} onChange={handleCheckAllTreeNode} >全选</Checkbox>
            <Link>重置</Link>
          </Space>

          <Space style={{ width: 200 }} >
            <Tree
              blockNode
              multiple
              showLine
              draggable
              checkable
              icons={{
                switcherIcon: <IconDragDotVertical />,
                dragIcon: <IconDragArrow />,
              }}
              checkedKeys={checkedKeys}
              onCheck={(keys, extra) => {
                console.log(keys, extra);
                setCheckedKeys(keys);
              }}
              onDrop={({ dragNode, dropNode, dropPosition }) => {
                function moveArrayElements(arr: string[], startIndex: number, endIndex: number, p: number) {
                  if (startIndex < 0 || startIndex >= arr.length || endIndex < 0 || endIndex >= arr.length) {
                    console.error("Invalid start index or end index.");
                    return arr;
                  }
                
                  const element = arr[startIndex];
                  arr.splice(startIndex, 1); // 移除开始下标位置的元素
                
                  if (p === -1) {
                    arr.splice(endIndex, 0, element); // 将元素插入结束下标的前面
                  } else if (p === 1) {
                    arr.splice(endIndex, 0, element); // 将元素插入结束下标的右侧
                  } else {
                    console.error("Invalid movement direction.");
                    return arr;
                  }
                
                  return arr;
                }
                const cloneKeys = clone(sortKeys)
                const dragIdx = cloneKeys.indexOf(dragNode?.key as string);
                const dropIdx = cloneKeys.indexOf(dropNode?.key as string);
                if (dropPosition !== 0) {
                  const newSortKeys = moveArrayElements(cloneKeys, dragIdx, dropIdx, dropPosition)
                   setSortKeys(newSortKeys)
                }
              }}
            >
              {sortKeys.map((columnDataIdx) => {
                const column = props.columns.find((v) => v.dataIndex === columnDataIdx)
                return (
                  <TreeNode
                    style={{ width: 200 }}
                    key={column.dataIndex}
                    title={column.title}
                  ></TreeNode>
                );
              })}
            </Tree>
          </Space>
        </Space>
      }
    >
      <Link>设置</Link>
    </Popover>
  );
};
