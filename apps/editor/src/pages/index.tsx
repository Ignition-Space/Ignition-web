import { createReactMateril } from "@huos/core";
import { ProCard } from "@ant-design/pro-components";

export const Index = () => {
  return (
    <div>
      <ProCard split="vertical">
        <ProCard title="左侧详情" colSpan="300px">
          左侧内容
        </ProCard>
        <ProCard title="左右分栏子卡片带标题" headerBordered>
          <div style={{ height: 360 }}>右侧内容</div>
        </ProCard>
      </ProCard>
    </div>
  );
};
