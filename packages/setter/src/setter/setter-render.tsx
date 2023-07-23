import type {
  ProFormDependencyProps,
  ProFormFieldProps,
} from "@ant-design/pro-components";
import { ProFormDependency, ProFormField } from "@ant-design/pro-components";
import { BindingPrototypeSetter } from "./binding-prototype-setter";
import { get } from "lodash-es";
import { Space } from "antd";

export interface SetterRenderProps
  extends Omit<ProFormDependencyProps, "children"> {
  setter: any;
  fileds?: ProFormFieldProps;
}

export const SetterRender: React.FC<SetterRenderProps> = ({
  setter: SetterComponent,
  fileds,
  ...props
}) => {
  return (
    <ProFormDependency {...props}>
      {(depends) => {
        const { $$const, $$jsx } = get(depends, props.name as string[]);
        return (
          <ProFormField {...fileds}>
            <Space align="baseline">
              <div>
                {<SetterComponent noStyle name={[...props.name, "$$const"]} />}
              </div>
              <BindingPrototypeSetter
                name={props.name as string[]}
              />
            </Space>
          </ProFormField>
        );
      }}
    </ProFormDependency>
  );
};
