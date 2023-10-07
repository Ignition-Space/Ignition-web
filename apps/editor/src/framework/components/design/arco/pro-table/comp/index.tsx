import React from 'react'
import { Table, Form, TableProps, GridProps } from "@arco-design/web-react"
import { SearchForm } from './search-form'

export interface ProTableProps extends TableProps {
  gridLayout?: Omit<GridProps, 'collapsed'>,
}

export const ProTable = React.forwardRef<HTMLDivElement, ProTableProps>((props, ref) => {

  const [ form ] = Form.useForm()

  return (
    <div ref={ref} className="arco-pro-table" >
      <SearchForm items={[
        {
          label: "",
          name: "email",
          componentProps: {
            options: []
          },
          componentType: "Select"
        }
      ]} form={form} />
      <Table {...props} />
    </div>
  )
})