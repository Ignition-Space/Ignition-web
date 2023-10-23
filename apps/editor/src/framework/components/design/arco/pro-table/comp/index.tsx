import React from "react";
import {
  Table,
  Form,
  TableProps,
  GridProps,
  FormInstance,
  TableInstance,
  Card,
  Space,
} from "@arco-design/web-react";
import { SearchForm, SearchFormProps } from "./search-form";
import { isEmpty } from "lodash";
import { useBoolean } from "ahooks";
import { Control } from "./control";

export interface ProTableProps extends TableProps {
  gridLayout?: Omit<GridProps, "collapsed">;
  searchFields?: SearchFormProps["items"];
  fromRef: FormInstance;
  tableRef: TableInstance;
  request?: (
    params: any,
    sort?: any,
    filter?: any
  ) => Promise<{
    data: any[];
    total: number;
    success: boolean;
  }>;
}

export const ProTable = React.forwardRef<HTMLDivElement, ProTableProps>(
  ({ searchFields, request, ...props }, ref) => {
    const [loading, { setTrue, setFalse }] = useBoolean(false);
    const [params, setParams] = React.useState({
      pageSize: 5,
      current: 1,
    });
    const [sort, setSort] = React.useState();
    const [filter, setFilter] = React.useState();
    const [tableData, setTableData] = React.useState<any>({
      data: [],
      total: 0,
    });
    const [checkKeys, setCheckKeys] = React.useState<string[]>([])
    const [sortKeys, setSortKeys] = React.useState<string[]>([])

    const [form] = Form.useForm();

    React.useEffect(() => {
      if (request) {
        setTrue();
        request(params, sort, filter)
          .then(({ success = false, data = [], total = [] }) => {
            if (success) {
              setTableData({
                data,
                total,
              });
            }
          })
          .finally(() => {
            setFalse();
          });
      }
    }, [params, sort, filter]);

    const handleSubmit = (values: any) => {
      setParams({
        pageSize: params.pageSize,
        current: 1,
        ...values,
      });
    };

    const handleColumns = React.useMemo(() => {
      if (!props.columns?.length) return []
      let columns = sortKeys.map((_key) => props.columns?.find((v) => v.dataIndex === _key))
      // 过滤显示的keys 
      const showColumns = columns.filter((v) => checkKeys.includes(v?.dataIndex as string))

      console.log(showColumns, 'showColumns')
      return showColumns
      
    }, [sortKeys, checkKeys, props.columns])

    return (
      <Space
        direction="vertical"
        style={{ width: "100%" }}
        ref={ref}
        className="arco-pro-table"
      >
        {isEmpty(searchFields) ? null : (
          <Card size="small">
            <Form form={form} onSubmit={handleSubmit}>
              <SearchForm loading={loading} items={searchFields || []} />
            </Form>
          </Card>
        )}
        <Card
          size="small"
          title="标题"
          bodyStyle={{ padding: 0, margin: 0 }}
          extra={<Control columns={props.columns || []} onChange={(checkable, sortKeys) => {
            setCheckKeys(checkable)
            setSortKeys(sortKeys)
          }} />}
        >
          <Table
            noDataElement
            borderCell={false}
            border={false}
            loading={loading}
            data={tableData.data}
            onChange={(pagination, sort: any, filter: any) => {
              setSort(sort)
              setFilter(filter)
              setParams({
                ...params,
                pageSize: pagination.pageSize || 10,
                current: pagination.current || 1,
              });
            }}
            pagination={{
              pageSize: params.pageSize,
              current: params.current,
              total: tableData?.total || 0,
            }}
            {...props}
            columns={handleColumns as any[]}
          />
        </Card>
      </Space>
    );
  }
);
