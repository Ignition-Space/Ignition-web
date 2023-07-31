import React from 'react'
import type { TableProps, TableColumnProps } from 'antd';
import { Table } from 'antd'
import { Element } from '@craftjs/core'
import { Slot } from '../../components/slot'

const key = new Date().getTime()


export const TableColumnView = React.forwardRef<HTMLDivElement, TableColumnProps<any>>((props, ref) => {

  return (
    <div ref={ref} >
      <Table.Column title={<Element is={Slot} id={key} />} dataIndex={key} key={key} {...props} />
    </div>
  )
})
