import React from "react";
import axios from "axios";
import { Select } from "antd";
import { useAsyncEffect } from "ahooks";
import { SelectProps } from "antd/lib";

export const DepEditableRecord: React.FC<SelectProps> = (props) => {
  const [depMetaList, setDepMetaList] = React.useState<
    Array<{
      label: string;
      value: string;
    }>
  >([]);

  useAsyncEffect(async () => {
    const result = await axios.get(
      "https://api.bootcdn.cn/libraries?output=human"
    );
    console.log(result, "result");
    if (result.status === 200) {
      setDepMetaList(
        result.data?.results.map((e: { name: string; latest: string }) => ({
          label: e.name,
          value: e.latest,
        }))
      );
    }
  }, []);

  const filterOption = (
    input: string,
    option?: { label: string; value: string }
  ) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  return (
    <Select
      {...props}
      style={{ width: "100%" }}
      virtual
      showSearch
      placeholder="请选择需要安装的依赖"
      filterOption={filterOption}
      options={depMetaList}
    />
  );
};
