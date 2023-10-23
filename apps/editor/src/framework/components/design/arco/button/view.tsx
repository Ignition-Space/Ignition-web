import { default as Button, ButtonProps } from '@arco-design/web-react/es/Button'
import { ReactMaterialViewType } from "@huos/core";

export const ButtonView: ReactMaterialViewType<ButtonProps> = ({children = '默认填充',  ...props}, ref: any) => {

  return (
    <Button ref={ref} {...props} >
      {children}
    </Button>
  );
}
