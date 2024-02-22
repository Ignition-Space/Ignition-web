import { css } from "@emotion/css";
import { RootContainer } from "@/components/root";
import { Flex, Typography } from "antd";
import { LoginForm } from "./login-form";

const classes = {
  layout: css({
    height: "100vh",
    width: "100%",
    paddingBlock: "5%",
    paddingInline: 24,
  }),
};

const LoginPage = () => {
  return (
    <RootContainer style={{
      backgroundImage: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)),url(https://zone-ui.vercel.app/assets/background/overlay_1.jpg)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundSize: "cover"
    }} >
      <Flex vertical className={classes.layout} justify="center" align="center" >
        <LoginForm />
      </Flex>
    </RootContainer>
  );
};

export default LoginPage;
