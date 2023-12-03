import { FormOutlined } from "@ant-design/icons";
import {
  ProCard,
  ProForm,
  ProFormGroup,
  ProFormText,
  ProFormTextArea,
  ProFormUploadButton,
} from "@ant-design/pro-components";
import { css } from "@emotion/css";
import { Flex } from "antd";
import { DepensManageCard } from "./depends";
import { LocaleEditTable } from "./locale";

export default () => {
  return (
    <div
      className={css({
        maxWidth: 1400,
        width: "100%",
        margin: "0 auto",
      })}
    >
      <ProForm
        submitter={false}
        initialValues={{
          dependencies: {
            js: {
              tpl: '<script defer="defer" src="${link}"></script>',
            },
          },
        }}
      >
        <Flex vertical gap={12}>
          <ProCard bordered title="应用信息" tooltip="当前应用的基本信息配置">
            <ProFormGroup direction="vertical">
              <ProFormUploadButton
                width="xs"
                title="应用图标"
                icon={<FormOutlined />}
                label="应用图标"
                name="icon"
                action="upload.do"
              />
              <ProFormText
                name="name"
                label="名称"
                width="lg"
                tooltip="最长为 24 位"
                placeholder="请输入名称"
                rules={[{ required: true }]}
              />
              <ProFormTextArea
                fieldProps={{
                  maxLength: 100,
                  showCount: true,
                  autoSize: {
                    minRows: 5,
                    maxRows: 5,
                  },
                }}
                width="lg"
                label="应用描述"
                name="description"
                placeholder="请输入应用描述"
                tooltip="页面的描述，在这里可以将你的应用信息进行详细的描述"
              />
            </ProFormGroup>
          </ProCard>

          {/* 依赖管理 */}
          <DepensManageCard />

          <LocaleEditTable />

          <ProCard
            bordered
            title="集成与自动化"
            collapsible
            defaultCollapsed
            tooltip="自动化相关，如触发器、定时任务、通知队列等相关配置"
          ></ProCard>

          <ProCard
            bordered
            title="运维与部署"
            collapsible
            defaultCollapsed
            tooltip="应用的运维与部署相关配置"
          ></ProCard>
        </Flex>
      </ProForm>
    </div>
  );
};
