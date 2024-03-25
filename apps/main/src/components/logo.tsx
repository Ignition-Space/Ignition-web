import { css } from "@emotion/css";
import { LogoSvg } from "@/icons/logo";
import { Badge, Flex, Tag, Typography, theme } from "antd";
import { FlexProps } from "antd/lib";

const classes = {
  logoName: css({
    lineHeight: 1,
    fontFamily: "'__Barlow_92d964','__Barlow_Fallback_92d964',Helvetica,Arial,sans-serif",
    marginTop: 6,
    fontSize: 16,
    fontWeight: 600
  }),
};

export const Logo: React.FC<Omit<FlexProps, 'children'> & {
  collapsed?: boolean;
}> = (props) => {
  return (
    <Flex {...props} >
      huos
      <Tag color="gra" >PRO</Tag>


      jjshkshuuemm
      {/* <Flex justify="flex-start" align="center" gap={8}>
        <LogoSvg height={28} width={28} />
        {props.collapsed ? null :  <Typography.Text className={classes.logoName}>HuoS Cloud</Typography.Text>}
      </Flex> */}
    </Flex>
  );
};