import {
  ModalForm,
  ProFormGroup,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
  ProFormList,
} from "@ant-design/pro-components";
import { Button, Space, Tag, notification } from "antd";
import { PlusOutlined } from "@ant-design/icons";

interface RecordType {
  name: string;
  device: string;
  descripton?: string;
  source: Array<{
    tag: 'link' | 'script';
    url: string;
  }>
}

export const CreateAppModal = () => {

  const handleCreatorRecord = async (values: RecordType) => {
    localStorage.setItem("projectInfo", JSON.stringify(values))
    notification.success({
      message: '创建成功',
      description: (
        <div>
          创建应用成功，点击开始编辑按钮可以快速进入编辑模式。
        </div>
      ),
      btn: (
        <Button size="small" type="link" >立即编辑</Button>
      )
    })
  }

  return (
    <ModalForm<RecordType>
      width={860}
      title="新建应用"
      modalProps={{
        okText: "立即创建",
        bodyStyle: {
          paddingBlock: 12,
        },
      }}
      onFinish={handleCreatorRecord}
      trigger={
        <Button type="primary">
          <PlusOutlined />
          新建应用
        </Button>
      }
    >
      <ProFormGroup size="small">
        <ProFormSelect
          rules={[{ required: true }]}
          name="device"
          label="类型"
          options={[
            {
              label: "客户端",
              value: "pc",
            },
            {
              label: "移动端",
              value: "mobile",
            },
            {
              label: "小程序",
              value: "miniapp",
            },
            {
              label: "AOT",
              value: "pad",
            },
          ]}
        />
        <ProFormText
          name="name"
          label="名称"
          width="lg"
          tooltip="最长为 24 位"
          placeholder="请输入名称"
          rules={[{ required: true }]}
        />
      </ProFormGroup>
      <ProFormTextArea
        label="应用描述"
        name="description"
        placeholder="请输入应用描述"
        tooltip="页面的描述，在这里可以将你的应用信息进行详细的描述"
      />
      <div
        style={{
          maxHeight: "400px",
          overflow: "auto",
        }}
      >
        <ProFormList
          label="预加载资源"
          name="heads"
          tooltip="需要提前加载的资源，脚本(js script)，资源(css, font...)"
          initialValue={[
            {
              useMode: "chapter",
            },
          ]}
          creatorButtonProps={{
            position: "bottom",
            creatorButtonText: "新建记录",
          }}
          creatorRecord={{
            tag: "script",
          }}
        >
          <Space>
            <ProFormText
              width="xl"
              name="url"
              addonBefore={<Tag color="blue">http(s)://</Tag>}
              rules={[
                {
                  required: true,
                  message: "请输入资源地址",
                },
              ]}
              placeholder="需要加载的资源地址"
            />
            <ProFormSelect
              name="tag"
              placeholder="资源标签"
              rules={[
                {
                  required: true,
                  message: "请选择资源类型",
                },
              ]}
              options={[
                {
                  label: "脚本",
                  value: "script",
                },
                {
                  label: "资源",
                  value: "link",
                },
              ]}
            />
          </Space>
        </ProFormList>
      </div>
    </ModalForm>
  );
};
