import { ConfigProvider, StepProps, Steps } from "antd";
import { css } from "@emotion/css";
import { StepLine } from "./line";

const items: StepProps[] = [
  {
    description: <StepLine title="当前版本" />,
    status: "process",
  },
  {
    description: <StepLine title="2023-1-1" />,
  },
];

export const LocalHisotry = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Steps: {
            dotCurrentSize: 6,
            dotSize: 6,
          },
        },
      }}
    >
      <div
        className={css({
          padding: 12,
        })}
      >
        <Steps size="small" direction="vertical" progressDot items={items} />
      </div>
    </ConfigProvider>
  );
};
