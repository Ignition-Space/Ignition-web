import { default as Grid, RowProps } from '@arco-design/web-react/es/Grid'
import { ReactMaterialViewType } from "@huos/core";

export const RowView: ReactMaterialViewType<RowProps> = ({children = '默认填充',  ...props}, ref: any) => {

  return (
    <Grid.Row ref={ref} {...props} >
      {children}
    </Grid.Row>
  );
}
