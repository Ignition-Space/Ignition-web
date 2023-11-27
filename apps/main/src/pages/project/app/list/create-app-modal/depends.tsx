import { CloseCircleOutlined, DeleteFilled, DeleteOutlined, SmileOutlined } from "@ant-design/icons";
import {
  ProForm,
  ProFormGroup,
  ProFormList,
  ProFormSelect,
  ProFormText,
} from "@ant-design/pro-components";
import { Button, Space } from "antd";

export const Depends = () => {
  return (
    <ProFormList
      name="dependencies"
      initialValue={[
        {
          tag: "link",
          url: "333",
        },
      ]}
      copyIconProps={false}
      deleteIconProps={{
        Icon: DeleteOutlined,
        tooltipText: '删除'
      }}
    >
      <ProFormGroup size="small" key="dependencies">
        <ProFormText name="url" label="地址" />
        <ProFormSelect
          name="tag"
          label="类型"
          options={[
            {
              label: "脚本",
              value: "script",
            },
            {
              label: "样式",
              value: "css",
            },
          ]}
        />
      </ProFormGroup>
    </ProFormList>
  );
};
