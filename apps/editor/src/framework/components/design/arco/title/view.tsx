import { default as Typography, TypographyTextProps } from '@arco-design/web-react/es/Typography'
import { ReactMaterialViewType } from "@huos/core";

export const TitleView: ReactMaterialViewType<TypographyTextProps> = ({children = '默认填充',  ...props}, ref: any) => {

  return (
    <div style={{ display: 'inline-block' }} ref={ref} >
      <Typography.Title  {...props} >
        {children}
      </Typography.Title>
    </div>
  );
}
