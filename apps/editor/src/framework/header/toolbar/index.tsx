import { theme, Button, Space } from "antd";
import { css } from "@emotion/css";
import { useEditor } from "@craftjs/core";
import { HuosRemixIcon } from "@huos/icons";

export const ToolBar = () => {
  const { token } = theme.useToken();
  const { actions } = useEditor();

  const classes = {
    toolbar: css({
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: token.colorBgBase,
    }),
    center: css({
      background: token.colorBgContainerDisabled,
      height: "80%",
      width: "300px",
      borderRadius: 4,
      display: "flex",
      alignItems: "center",
      paddingInline: 14,
    }),
  };

  console.log(actions.history);

  return (
    <div className={classes.toolbar}>
      <Space>
        <Button
          icon={<HuosRemixIcon type="icon-arrow-go-back-fill" />}
          onClick={actions.history.undo}
        />
        <Button
          icon={<HuosRemixIcon type="icon-arrow-go-forward-fill" />}
          onClick={actions.history.redo}
        />
        <Button
          icon={<HuosRemixIcon type="icon-refresh-line" />}
          onClick={() => window.location.reload()}
        />
      </Space>
    </div>
  );
};
