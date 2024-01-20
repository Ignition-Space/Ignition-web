import React from "react";
import { useHover } from "ahooks";
import { Flex, Typography, Button, Dropdown } from "antd";
import { HuosRemixIcon } from "@huos/icons";
import { CloudSyncOutlined } from "@ant-design/icons";

export interface StepLineProps {
  title: string;
}

export const StepLine: React.FC<StepLineProps> = (props) => {
  const ref = React.useRef<HTMLElement>(null);
  const [open, setOpen] = React.useState(false)
  const hoverd = useHover(ref);

  return (
    <Flex ref={ref} justify="space-between">
      <Flex flex={1} gap={4} >
        <Typography.Text>{props.title}</Typography.Text>
      </Flex>
      <Flex gap={6} style={{ visibility: hoverd || open ? "visible" : "hidden" }}>
        <CloudSyncOutlined />
        <Dropdown
          open={open}
          onOpenChange={setOpen}
          menu={{
            items: [
              {
                key: "reset",
                label: "恢复副本",
              },
              {
                key: "delete",
                label: "删除副本",
                danger: true
              },
            ],
          }}
        >
          <Button size="small" type="text" icon={<HuosRemixIcon type="icon-more-fill" />} />
        </Dropdown>
      </Flex>
    </Flex>
  );
};
