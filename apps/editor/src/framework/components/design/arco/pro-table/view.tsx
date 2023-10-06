import { ReactMaterialViewType } from "@huos/core";

export const ProTableView: ReactMaterialViewType<any> = ({children = '默认填充',  ...props}, ref: any) => {

  return (
    <div style={{ display: 'inline-block' }} ref={ref} >
      1111
    </div>
  );
}
