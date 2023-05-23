import type { TreeProps } from 'antd';
import { Button, Col, Row, Space, Tree } from 'antd'

const treeData: TreeProps['treeData'] = [
  {
    title: 'parent 1',
    key: '0-0',
    children: [
      {
        title: 'parent 1-0',
        key: '0-0-0',
        disabled: true,
        children: [
          {
            title: 'leaf',
            key: '0-0-0-0',
            disableCheckbox: true
          },
          {
            title: 'leaf',
            key: '0-0-0-1'
          }
        ]
      },
      {
        title: 'parent 1-1',
        key: '0-0-1',
        children: [{ title: <span style={{ color: '#1890ff' }}>sss</span>, key: '0-0-1-0' }]
      }
    ]
  }
]

export const NodeTree = () => {
  return (
    <Row gutter={[0, 12]}>
      <Col span={24}>
        <Tree
          checkable
          blockNode
          selectable={false}
          defaultExpandedKeys={['0-0-0', '0-0-1']}
          treeData={treeData}
        />
      </Col>
    </Row>
  )
}
