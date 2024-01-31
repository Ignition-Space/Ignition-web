import { CodeEditor } from "@/framework/common/code-editor";
import { InfoCircleOutlined } from "@ant-design/icons";
import {
  ProForm,
  ProFormSegmented,
  ProFormSelect,
} from "@ant-design/pro-components";
import { Space, Tag, Tooltip, Flex, Typography, Input, Button } from "antd";

const httpMethodOptions = ["GET", "POST", "PUT", "DELETE"].map((method) => ({
  label: <Tag color="blue">{method}</Tag>,
  value: method,
}));

export const FetchPanel = () => {
  return (
    <div style={{ width: "50%" }}>
      <ProForm submitter={false}>
        <ProForm.Item style={{ width: "100%" }}>
          <Space.Compact block>
            <ProFormSelect
              noStyle
              style={{ width: "max-content", minWidth: 100 }}
              placeholder="请求方式"
              options={httpMethodOptions}
            />
            <ProForm.Item noStyle>
              <Input
                style={{
                  minWidth: 300,
                }}
                placeholder="接口请求URL"
                addonBefore={
                  <Tooltip title="协议接口，跟随您当前的origin自动适应http与https">
                    <Flex gap={6} align="center">
                      <InfoCircleOutlined style={{ cursor: "pointer" }} />
                      <Typography.Text>http(s)://</Typography.Text>
                    </Flex>
                  </Tooltip>
                }
              />
            </ProForm.Item>

            <ProForm.Item noStyle>
              <Input
                style={{
                  minWidth: 300,
                }}
                placeholder={`接口请求地址，以 "/" 开始`}
              />
            </ProForm.Item>
            <Button type="primary">发送</Button>
          </Space.Compact>
        </ProForm.Item>

        <ProFormSegmented
          name="segmented"
          label="请求参数"
          request={async () => [
            {
              label: "Query",
              value: "query",
            },
            {
              label: "Body",
              value: "body",
            },
            {
              label: "Headers",
              value: "headers",
            },
            {
              label: "Cookie",
              value: "cookie",
            },
          ]}
        />
        <ProForm.Item>
          <CodeEditor language="json" height={200} />
        </ProForm.Item>
      </ProForm>
    </div>
  );
};
