import { css } from "@emotion/css";
import { useSettingState } from "../stores/useSettings";
import { Button, Flex, Tabs } from "antd";
import { DownOutlined } from "@ant-design/icons";

const classes = {
  settings: css({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    overflow: "hidden",
    background: "white",
    zIndex: 199,
    display: "flex",
    justifyContent: "center",
  }),
};

export const Settings = () => {
  const { showSetting, onChange } = useSettingState();

  if (!showSetting) {
    return null;
  }

  return (
    <div
      className={classes.settings}
      style={{
        display: showSetting ? undefined : "none",
      }}
    >
      <div style={{ width: "100%" }}>
        <Tabs
          centered
          size="small"
          tabBarStyle={{
            paddingInline: 12
          }}
          tabBarExtraContent={(
            <Flex>
              <Button size='small' onClick={() => onChange('showSetting', false) } icon={<DownOutlined/>} />
            </Flex>
          )}
          items={[
            {
              label: "基础设置",
              key: "label",
              children: '1'
            },
            {
              label: "HTML设置",
              key: "s",
            },
          ]}
        />
      </div>
    </div>
  );
};
