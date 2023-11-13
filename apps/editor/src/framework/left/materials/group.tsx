import { ProCard } from "@ant-design/pro-components";
import { Materials, MaterialProps } from '.'


export interface MaterialGroupProps  {
  groupName: string;
  groupList: MaterialProps["components"];
  description?: string;
}

export const MaterialGroup: React.FC<MaterialGroupProps> = (props) => {
  return (
    <ProCard
      bordered
      headerBordered
      tooltip={props.description}
      title={props.groupName}
      size="small"
      collapsible
      defaultCollapsed={false}
      ghost
    >
      <Materials components={props.groupList} />
    </ProCard>
  );
};
