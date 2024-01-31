import { CodeEditor } from "@/framework/common/code-editor";
import { InfoCircleOutlined } from "@ant-design/icons";
import {
  ProForm,
  ProFormSegmented,
  ProFormSelect,
} from "@ant-design/pro-components";
import {
  Space,
  Tag,
  Tooltip,
  Flex,
  Typography,
  Input,
  Button,
  Form,
} from "antd";
import request from 'umi-request'

const httpMethodOptions = ["GET", "POST", "PUT", "DELETE"].map((method) => ({
  label: <Tag color="blue">{method}</Tag>,
  value: method,
}));

const defaultValue = `{
  "origin": "huos"
}`;

export const FetchPanel = () => {
  const [form] = Form.useForm();

  const onSendFetchInstance = async () => {
    const requestData = await form.validateFields()

    const response = await request(requestData.url, {
      prefix: window.location.protocol + '//' + requestData?.origin,
      [requestData.requestKey]: requestData?.requestValue
    })

    console.log(response, 'response')
  };

  return (
    <ProForm
      submitter={false}
      form={form}
      initialValues={{
        method: "GET",
        origin: "proapi.azurewebsites.net",
        url: "/github/issues",
      }}
    >
      <ProForm.Item style={{ width: "100%" }}>
        <Space.Compact block>
          <ProFormSelect
            noStyle
            name="method"
            style={{ width: "max-content", minWidth: 100 }}
            placeholder="请求方式"
            options={httpMethodOptions}
          />
          <ProForm.Item noStyle name="origin">
            <Input
              style={{
                minWidth: 100,
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

          <ProForm.Item noStyle name="url">
            <Input
              style={{
                minWidth: 100,
              }}
              placeholder={`接口请求地址，以 "/" 开始`}
            />
          </ProForm.Item>
          <Button type="primary" onClick={onSendFetchInstance}>
            发送
          </Button>
        </Space.Compact>
      </ProForm.Item>

      <ProFormSegmented
        name="requestKey"
        label="请求参数"
        tooltip="可以简单的输入当前的请求参数"
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
      <ProForm.Item name="requestValue">
        <CodeEditor defaultValue={defaultValue} language="json" height={200} />
      </ProForm.Item>
    </ProForm>
  );
};
