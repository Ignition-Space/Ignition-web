import React from "react";
import axios from "axios";
import { PlusOutlined } from "@ant-design/icons";
import { ModalForm } from "@ant-design/pro-components";
import { Button, Select } from "antd";

export const DepManageModal = () => {
  const [depMetaList, setDepMetaList] = React.useState<string[][]>([]);

  const handleOpen = async () => {
    const result = await axios.get("https://api.bootcdn.cn/libs.min.json");
    if (result.status === 200) {
      setDepMetaList(result.data);
    }
  };

  const filterOption = (
    input: string,
    option?: { label: string; value: string }
  ) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  return (
    <ModalForm
      title="依赖管理"
      trigger={<Button block icon={<PlusOutlined />}>依赖安装</Button>}
      onOpenChange={(_open) => {
        if (_open) {
          handleOpen();
        }
      }}
    >
      <Select
        style={{ width: '100%' }}
        virtual
        showSearch
        placeholder="搜索当前"
        filterOption={filterOption}
        options={depMetaList.map(([packageName, packageDesc]) => ({
          label: packageName,
          value: packageDesc,
        }))}
      />
    </ModalForm>
  );
};
