import {
  Grid,
  Form,
  Input,
  Button,
  FormInstance,
  Typography,
  InputNumber,
  Select,
  FormItemProps
} from "@arco-design/web-react";
import { IconDoubleDown, IconDoubleUp } from "@arco-design/web-react/icon";
import { useBoolean } from "ahooks";

const resolver = {
  InputNumber,
  Select,
  Input,
} as const;

const { GridItem } = Grid;

export interface SearchFormProps {
  form: FormInstance;
  items: Array<{
    componentType: keyof typeof resolver;
    componentProps: any;
  } & FormItemProps>;
}

export const SearchForm: React.FC<SearchFormProps> = (props) => {
  const [collapsed, { toggle }] = useBoolean();

  return (
    <Form form={props.form} style={{ marginBottom: 12 }}>
      <Grid collapsed={collapsed} cols={3} colGap={12}>
        {props.items.map((item) => {
          const { componentType, componentProps, ...formItemProps } = item
          const Element = resolver?.[componentType]
          return (
            <GridItem>
              <Form.Item {...formItemProps} >
                <Element {...componentProps} />
              </Form.Item>
            </GridItem>
          );
        })}
        <GridItem suffix>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              justifyContent: "flex-end",
            }}
          >
            <Typography.Text
              style={{ cursor: "pointer" }}
              type="primary"
              onClick={toggle}
            >
              {collapsed ? <IconDoubleDown /> : <IconDoubleUp />}
              {collapsed ? "展开" : "收起"}
            </Typography.Text>
            <Button htmlType="reset">重置</Button>
            <Button htmlType="submit" type="primary">
              提交
            </Button>
          </div>
        </GridItem>
      </Grid>
    </Form>
  );
};


SearchForm.defaultProps = {
  items: []
}