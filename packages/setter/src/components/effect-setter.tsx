import type { ProFormItemProps } from "@ant-design/pro-components";
import {
  ProForm,
  ProFormDigit,
  ProFormSelect,
} from "@ant-design/pro-components";

export const EffectSetter: React.FC<ProFormItemProps> = () => {
  return (
    <ProForm.Group>
      <ProFormDigit
        colProps={{
          span: 8,
        }}
        name={["style", "opacity"]}
        label="opacity"
        tooltip="opacity"
        min={0.1}
        max={1}
      />
      <ProFormSelect
        colProps={{
          span: 8,
        }}
        name={["style", "cursor"]}
        placeholder="auto"
        allowClear
        label="鼠标样式"
        options={[
          "auto",
          "default",
          "none",
          "context-menu",
          "help",
          "pointer",
          "progress",
          "wait",
          "call",
          "crosshair",
          "text",
          "vertical-text",
          "alias",
          "copy",
          "move",
          "no-drop",
          "not-allowed",
          "row-resize",
          "col-resize",
          "all-scroll",
          "zoom-in",
          "zoom-out",
        ].map((value) => ({
          label: value,
          value,
        }))}
      />
      <ProFormSelect
        colProps={{
          span: 8,
        }}
        name={["style", "mixBlendMode"]}
        placeholder="normal"
        label="混合"
        allowClear
        options={[
          "normal",
          "multiply",
          "screen",
          "overlay",
          "darken",
          "lighten",
          "color-dodge",
          "color-burn",
          "hard-light",
          "soft-light",
          "difference",
          "exclusion",
          "hue",
          "saturation",
          "color",
          "luminosity",
        ].map((value) => ({
          label: value,
          value,
        }))}
      />
    </ProForm.Group>
  );
};
