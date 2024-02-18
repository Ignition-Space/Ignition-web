import { CloseOutlined, PlusOutlined } from "@ant-design/icons";
import { css } from "@emotion/css";
import { HuosRemixIcon } from "@huos/icons";
import {
  Button,
  Flex,
  SelectProps,
  Space,
  Typography,
  theme,
} from "antd";
import { DepEditableRecord } from "./dep-editable-record";
import { useBoolean } from "ahooks";
import { useSchema } from "@/framework/stores/useSchema";
import _ from "lodash";

const classes = {
  dep: css({
    borderTop: `1px solid ${theme.getDesignToken().colorBorderSecondary}`,
    padding: theme.getDesignToken().paddingXS,
  }),
};

export const DepTree = () => {
  const [editable, { setTrue, setFalse }] = useBoolean(false);
  const depsMap = useSchema((selector) => selector.depsMap);
  const onChangedepsMap = useSchema((selector) => selector.onChange);


  // 安装CDN依赖
  const onInstallCDNDependPackage: SelectProps["onChange"] = (
    _,
    option: any
  ) => {
    const newDepsMap = {
      ...depsMap,
      [option.label]: {
        url: option.value as string,
        version: "letset",
      },
    };
    onChangedepsMap("depsMap", newDepsMap);
  };

  // 移除CDN依赖
  const onRemoveCDNDependPackage = (key: string) => {
    const newDepsMap = {
      ...depsMap,
      [key]: undefined
    }
    onChangedepsMap("depsMap", newDepsMap);
  }

  return (
    <Flex className={classes.dep} vertical gap={12}>
      {_.map(depsMap, (row, name) => (
        <Flex style={{ width: "100%" }} justify="space-between">
          <Typography.Text>
            {name}@{row.version}
          </Typography.Text>
          <Space size={4}>
            <Button
              size="small"
              type="text"
              icon={<HuosRemixIcon type="icon-share-box-line" />}
            />
            <Button
              size="small"
              type="text"
              icon={<HuosRemixIcon type="icon-refresh-line" />}
            />
            <Button
              size="small"
              type="text"
              icon={<HuosRemixIcon type="icon-delete-bin-3-line" />}
              onClick={() => onRemoveCDNDependPackage(name)}
            />
          </Space>
        </Flex>
      ))}

      {editable ? (
        <Space.Compact>
          <DepEditableRecord allowClear onChange={onInstallCDNDependPackage} />
          <Button icon={<CloseOutlined />} onClick={setFalse} />
        </Space.Compact>
      ) : (
        <Button type="dashed" icon={<PlusOutlined />} onClick={setTrue}>
          安装依赖
        </Button>
      )}
      {/* <DepManageModal /> */}
    </Flex>
  );
};
