import { default as Link, LinkProps } from '@arco-design/web-react/es/Link'
import { ReactMaterialViewType } from "@huos/core";

export const LinkView: ReactMaterialViewType<LinkProps> = ({children = '默认填充',  ...props}, ref: any) => {

  return (
    <Link ref={ref} {...props} >
      {children}
    </Link>
  );
}
