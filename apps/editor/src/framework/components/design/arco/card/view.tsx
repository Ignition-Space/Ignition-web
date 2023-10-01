import { default as Card, CardProps } from "@arco-design/web-react/es/Card";
import { ReactMaterialViewType } from "@huos/core";

export const CardView: ReactMaterialViewType<CardProps> = ({ children,  ...props }, ref) => {
  return (
    <Card
      ref={ref}
      {...props}
    >
      {children}
    </Card>
  );
}

/**
 * 
 * 
 * 
 * {
  title: (
    <Element canvas id="card-title-slot" is="div">
      标题
    </Element>
  ),
  extra: (
    <Element canvas id="card-title-extra" is="div">
      额外空间
    </Element>
  ),
  children: (
    <Element canvas id="card-title-children" is="div">
      <div>请添加组件</div>
    </Element>
  ),
}
 */
