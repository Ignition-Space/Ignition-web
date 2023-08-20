import React from "react";
import { Form, FormItemProps, Input, Select, Space, Typography } from "antd";
import { BindingStateSetter } from "./binding-state-setter";
import { ProFormDependency } from "@ant-design/pro-components";
import { ReadonlyState } from './readonly-state'
import { get } from "lodash";
import { css } from "@emotion/css";

export interface MountSetterProps {
  fields: FormItemProps;
  children?: React.ReactNode;
}

const classes = {
  space: css({
    display: "flex",
    justifyContent: "space-between",
    gap: 12,
  }),
};

const getFormItemNamePaths = (name: string | string[]): any[] => {
  // FormItem name字符串写法
  if (typeof name === "string") {
    return [name];
  }

  // FormItem name数组写法
  if (Array.isArray(name)) {
    return name;
  }

  return [];
};

export const MountSetter: React.FC<MountSetterProps> = (props) => {
  const namePath = React.useMemo(() => {
    return getFormItemNamePaths(props.fields.name);
  }, [props.fields?.name]);

  console.log("namePath");

  return (
    <Form.Item {...props.fields}>
      <ProFormDependency name={namePath}>
        {(value) => {
          // get filedValue by namepath
          const filedValue = get(value, namePath);

          const isJsx = !!filedValue?.$$jsx

          return (
            <div className={classes.space}>
              <Form.Item noStyle name={namePath}>
                { isJsx ? <ReadonlyState/> : props.children }
              </Form.Item>
              <Form.Item noStyle name={[...namePath, "$$jsx"]}>
                <BindingStateSetter
                  namePath={namePath.join(".")}
                  isBinding={isJsx}
                />
              </Form.Item>
            </div>
          );
        }}
      </ProFormDependency>
    </Form.Item>
  );
};

MountSetter.defaultProps = {
  fields: {},
};
