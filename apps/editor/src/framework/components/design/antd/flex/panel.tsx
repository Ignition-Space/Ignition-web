import { BindPrototypeManage } from "@huos/setter";
import { Typography } from "antd";

export const Panel = () => {
  return (
    <>
    <BindPrototypeManage
        label="宽度"
        name={["style", "width"]}
      />
      <BindPrototypeManage
        label="高度"        
        name={["style", "height"]}
      />
      <BindPrototypeManage
        label="垂直布局"
        name="vertical"
        tooltip="flex 主轴的方向是否垂直，使用 【flex-direction: column】"
      />
      <BindPrototypeManage
        label="换行"
        name="wrap"
        tooltip={
          <Typography.Text>
            设置元素单行显示还是多行显示参考
            <Typography.Link
              target="_blank"
              href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-wrap"
            >
              【flex-wrap】
            </Typography.Link>
          </Typography.Text>
        }
      />
      <BindPrototypeManage
        label="主轴对齐"
        name="justify"
        tooltip={
          <Typography.Text>
            设置元素在主轴方向上的对齐方式， 参考
            <Typography.Link
              target="_blank"
              href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/justify-content"
            >
              【flex-wrap】
            </Typography.Link>
          </Typography.Text>
        }
      />
      <BindPrototypeManage
        label="交叉轴对齐"
        name="align"
        tooltip="设置元素在交叉轴方向上的对齐方式"
      />
      <BindPrototypeManage
        label="flex"
        name="flex"
        tooltip="flex CSS 简写属性设置了弹性项目如何增大或缩小以适应其弹性容器中可用的空间。"
      />
      <BindPrototypeManage
        label="间隙"
        name="gap"
        tooltip="设置网格之间的间隙"
      />
    </>
  );
};
