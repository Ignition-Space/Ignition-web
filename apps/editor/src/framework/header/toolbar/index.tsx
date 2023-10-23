import {
  theme,
  Button,
  message,
  Tooltip,
  Popconfirm,
} from "antd";
import { css } from "@emotion/css";
import { useEditor } from "@craftjs/core";
import { HuosRemixIcon } from "@huos/icons";
import { JsEditor } from './js-editor'
import { QuestionCircleOutlined } from "@ant-design/icons";

export const ToolBar = () => {
  const { token } = theme.useToken();
  const { actions, selectedId, isRootNode } = useEditor(({ events }) => {
    const [id] = events.selected;
    return {
      selectedId: id,
      isRootNode: id === "ROOT",
    };
  });


  const classes = {
    toolbar: css({
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: token.colorBgBase,
      gap: 8,
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

  /**
   * 处理删除选中节点逻辑
   */
  const handleDeleteSelectedNode = () => {
    try {
      actions.delete(selectedId);
      message.success("删除成功");
    } catch (error) {
      message.error("删除失败");
    }
  };

  return (
    <div className={classes.toolbar}>
      <Tooltip placement="bottom" color="blue" title="撤销">
        <Button
          icon={<HuosRemixIcon type="icon-arrow-go-back-fill" />}
          onClick={actions.history.undo}
        />
      </Tooltip>
      <Tooltip placement="bottom" title="恢复" color="blue">
        <Button
          icon={<HuosRemixIcon type="icon-arrow-go-forward-fill" />}
          onClick={actions.history.redo}
        />
      </Tooltip>
      <Tooltip color="blue" placement="bottom" title="强制刷新">
        <Popconfirm
          title="强制刷新"
          description={<div style={{ width: 250 }} >强制刷新将会导致您页面的修改丢失，且无法恢复，如果继续进行下一步，请点击确认按钮。</div>}
          icon={<QuestionCircleOutlined style={{ color: "red" }} />}
          onConfirm={() => window.location.reload()}
          okButtonProps={{
            danger: true,
            type: "dashed"
          }}
        >
          <Button
            icon={<HuosRemixIcon type="icon-refresh-line" />}
          />
        </Popconfirm>
      </Tooltip>
      <JsEditor trigger={(
        <Tooltip placement="bottom" title="代码">
        <Button
          icon={<HuosRemixIcon type="icon-braces-line" />}
          onClick={actions.history.redo}
        />
      </Tooltip>
      )} />
      <Tooltip
        color={isRootNode ? "red" : "blue"}
        placement="bottom"
        title={isRootNode ? "当前选中为根节点，不允许删除" : "删除"}
      >
        <Button
          danger
          icon={<HuosRemixIcon type="icon-delete-bin-4-line" />}
          onClick={handleDeleteSelectedNode}
          disabled={isRootNode}
        />
      </Tooltip>
    </div>
  );
};
