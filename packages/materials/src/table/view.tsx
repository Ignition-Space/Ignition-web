import React from 'react'
import type { TableProps } from 'antd';
import { Table } from 'antd'
import { Slot } from '../components/slot'
import { Element } from '@craftjs/core'

const createEl = (idx: number, component?: any) => {
  return (<Element key={idx} canvas id={`table-address-${idx}`} is={Slot}  />)
}

const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
];


export const TableView = React.forwardRef<HTMLDivElement, TableProps<any>>((props, ref) => {

  console.log(props, 'TableViewProps')

  const columns = [
    {
      title: <Element is={Slot} canvas id={`table-title-name`} />,
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: <Element is={Slot} canvas id={`table-title-age`} />,
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
      render: (val: any, record: any, idx: number) => {
        const el = createEl(idx)
        console.log(el, 'el')
        return (
          <div>
            {el}
          </div>
        )
      }
    },
  ];

  return (
    <div  ref={ref} >
      <Table dataSource={dataSource} columns={columns} {...props} />
    </div>
  )
})
