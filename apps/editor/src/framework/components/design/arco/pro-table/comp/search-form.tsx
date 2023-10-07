import {
  Grid,
  Form,
  Input,
  Button,
  Typography,
  InputNumber,
  Select,
  FormItemProps,
  Switch,
  TreeSelect,
  Slider
} from "@arco-design/web-react";
import { IconDoubleDown, IconDoubleUp } from "@arco-design/web-react/icon";
import { useBoolean } from "ahooks";

const resolver = {
  InputNumber,
  Select,
  Input,
  Switch,
  TreeSelect,
  Slider,
  // ...
} as const;

const { GridItem } = Grid;

export interface SearchFormProps {
  items: Array<{
    componentType: keyof typeof resolver;
    componentProps: any;
  } & FormItemProps>;
  loading: boolean;
}

export const SearchForm: React.FC<SearchFormProps> = (props) => {
  const [collapsed, { toggle }] = useBoolean(true);

  return (
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
          <Button htmlType="submit" loading={props.loading} type="primary">
            提交
          </Button>
        </div>
      </GridItem>
    </Grid>
  );
};


SearchForm.defaultProps = {
  items: []
}
