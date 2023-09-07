import {
  ModalForm,
  ProForm,
  ProFormCheckbox,
  ProFormDatePicker,
  ProFormDateRangePicker,
  ProFormGroup,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
  StepsForm,
} from "@ant-design/pro-components";
import { Button, Card, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";

export const CreateAppModal = () => {
  return (
    <ModalForm
      width={820}
      title="新建应用"
      submitter={false}
      modalProps={{
        bodyStyle: {
          padding: "24px 12px",
        },
      }}
      trigger={
        <Button type="primary">
          <PlusOutlined />
          新建应用
        </Button>
      }
    >
      <StepsForm<{
        name: string;
      }>
        formProps={{
          validateMessages: {
            required: "此项为必填项",
          },
        }}
      >
        <StepsForm.StepForm<{
          name: string;
        }>
          name="base"
          title="基本信息"
          stepProps={{
            description: "这里填入基本信息",
          }}
        >
          <ProFormGroup size="small">
            <ProFormSelect
              rules={[{ required: true }]}
              name="device"
              label="页面类型"
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
              label="实验名称"
              width={450}
              tooltip="最长为 24 位，用于标定的唯一 id"
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
        </StepsForm.StepForm>
        <StepsForm.StepForm<{
          checkbox: string;
        }>
          name="checkbox"
          title="初始化依赖"
          stepProps={{
            description: "这里填入运维参数",
          }}
        >
          <ProFormCheckbox.Group
            name="checkbox"
            label="迁移类型"
            options={["结构迁移", "全量迁移", "增量迁移", "全量校验"]}
          />
          <ProForm.Group>
            <ProFormText name="dbname" label="业务 DB 用户名" />
            <ProFormDatePicker
              name="datetime"
              label="记录保存时间"
              width="sm"
            />
            <ProFormCheckbox.Group
              name="checkbox"
              label="迁移类型"
              options={["完整 LOB", "不同步 LOB", "受限制 LOB"]}
            />
          </ProForm.Group>
        </StepsForm.StepForm>
        <StepsForm.StepForm
          name="time"
          title="发布实验"
          stepProps={{
            description: "这里填入发布判断",
          }}
        >
          <ProFormCheckbox.Group
            name="checkbox"
            label="部署单元"
            rules={[
              {
                required: true,
              },
            ]}
            options={["部署单元1", "部署单元2", "部署单元3"]}
          />
          <ProFormSelect
          width="lg"
            label="部署分组策略"
            name="remark"
            rules={[
              {
                required: true,
              },
            ]}
            initialValue="1"
            options={[
              {
                value: "1",
                label: "策略一",
              },
              { value: "2", label: "策略二" },
            ]}
          />
          <ProFormSelect
            label="Pod 调度策略"
            name="remark2"
            initialValue="2"
            options={[
              {
                value: "1",
                label: "策略一",
              },
              { value: "2", label: "策略二" },
            ]}
          />
        </StepsForm.StepForm>
      </StepsForm>
    </ModalForm>
  );
};
