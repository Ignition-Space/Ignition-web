import { ProLayoutProps } from "@ant-design/pro-components";
import { UserProfileDrawer } from "@/components/profile";
import { Space, Input, Divider } from "antd";
import {
  ExperimentOutlined,
  InboxOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { TooltipButton } from '@/components/tooltip-button'
import { HuosRemixIcon } from "@huos/icons";
import { css } from "@emotion/css";

const classes = {
  contetnt: css({
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  }),
};

export const customRenderHeaderContent: ProLayoutProps["headerContentRender"] = () => {
  return (
    <div className={classes.contetnt}>
      <Space split={<Divider style={{ margin: 0 }} type="vertical" />}>
        {/* 搜索框&弹窗 */}
        <Input
          suffix={
            <HuosRemixIcon
              style={{ cursor: "pointer" }}
              type="icon-terminal-fill"
            />
          }
          prefix={<SearchOutlined />}
          placeholder="搜索内容"
          style={{ width: 300 }}
        />
        {/* 操作栏 */}
        <Space>
          <TooltipButton title="实验室" icon={<ExperimentOutlined />} />
          <TooltipButton title="问题" icon={<HuosRemixIcon type="icon-record-circle-line" />} />
          <TooltipButton title="信息" icon={<InboxOutlined />} />
        </Space>
        {/* 用户信息 */}
        <UserProfileDrawer />
      </Space>
    </div>
  );
};
