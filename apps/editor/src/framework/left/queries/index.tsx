import { ModalForm } from "@ant-design/pro-components";
import { toOptions } from "@huos/setter";
import { Button, Input, Select, Space } from "antd";

const requestOptions = toOptions(["GET", "POST", "PUT", "DELETE", "PATCH", "CUSTOM"])


export const Queries = () => {
  return (
    <ModalForm title="接口请求" trigger={<Button>Open Modal</Button>}>
      <Space.Compact >
      <Select style={{ width: 250 }} options={requestOptions} defaultValue="GET"  />
      <Input placeholder="请输入请求地址11" />
      <Button type="primary" >Send</Button>
    </Space.Compact>
    </ModalForm>
  );
};
