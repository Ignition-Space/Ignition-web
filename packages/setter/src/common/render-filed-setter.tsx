import { ProFormDependency } from "@ant-design/pro-components";
import { Button, Flex, Form, Typography, FormItemProps } from "antd";
import FormItem from "antd/es/form/FormItem";
import { HuosRemixIcon } from "@huos/icons";
import React from "react";
import { css } from "@emotion/css";
import { ExpressionModal } from "../components/expression-modal";
import _ from "lodash";
import { ClearOutlined } from "@ant-design/icons";

export interface RenderFieldSetterProps extends FormItemProps {
  name?: string;
  label?: string;
  isExpression?: boolean;
  children?: React.ReactNode;
}

export interface SetterProps<T> extends RenderFieldSetterProps {
  filedProps?: T;
}

const classes = {
  row: css({
    width: "100%",
    marginBlockEnd: 12,
  }),
};

export const RenderFieldSetter: React.FC<RenderFieldSetterProps> = ({
  children,
  ...props
}) => {
  const namePath = React.useMemo(() => {
    return props.name?.split(".") || [];
  }, [props.name]);

  return (
    <FormItem noStyle>
      <Flex
        gap={6}
        align="center"
        className={classes.row}
        justify="space-between"
      >
        <Flex align="center" flex="0 0 70px" wrap="nowrap">
          <Typography.Text ellipsis>{props.label}</Typography.Text>
        </Flex>
        {props.name ? (
          <ProFormDependency name={[namePath]}>
            {(_value, _form) => {
              const fieldValue = _.get(_value, props.name + ".$$jsx");
              return (
                <Flex flex={1} justify="flex-end" align="center" gap={12}>
                  {fieldValue ? (
                    <Flex justify="space-between">
                      <Typography.Text code ellipsis>
                        {fieldValue}
                      </Typography.Text>
                      <Button
                        type="text"
                        size="small"
                        icon={<ClearOutlined />}
                        onClick={() => {
                          _form.setFieldValue(namePath, null);
                        }}
                      />
                    </Flex>
                  ) : (
                    <Form.Item name={namePath} noStyle {...props}>
                      {children}
                    </Form.Item>
                  )}
                  {props.isExpression ? (
                    <Form.Item name={[...namePath, "$$jsx"]} noStyle>
                      <ExpressionModal
                        namePath={namePath}
                        trigger={
                          <Button
                            type={fieldValue ? "primary" : "dashed"}
                            icon={
                              <HuosRemixIcon type="icon-code-s-slash-line" />
                            }
                          />
                        }
                      />
                    </Form.Item>
                  ) : null}
                </Flex>
              );
            }}
          </ProFormDependency>
        ) : (
          children
        )}
      </Flex>
    </FormItem>
  );
};

RenderFieldSetter.defaultProps = {
  name: "",
  isExpression: true,
};
