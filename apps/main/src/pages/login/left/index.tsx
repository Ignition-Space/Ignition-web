import { css } from "@emotion/css";
import { Logo } from "@/components/logo";
import { Button, Flex, Typography } from "antd";

const classes = {
  section: css({
    width: "100%",
    height: "100%",
    position: "relative",
  }),

  icon: css({
    position: "absolute",
    top: 0,
    left: 0,
  }),

  text: css({
    margin: 0,
  }),
};

export const Section = () => {
  return (
    <Flex vertical justify="center" align="center" className={classes.section} gap={52} >
      <Logo className={classes.icon} />
      <Flex vertical>
        <Typography.Title
          style={{
            margin: 0,
          }}
          className={classes.text}
          level={1}
        >
          Create Your
        </Typography.Title>
        <Typography.Title
          style={{
            margin: 0,
          }}
          className={classes.text}
          level={1}
        >
          Beautiful
        </Typography.Title>
      </Flex>
      <Flex gap={12} style={{ width: 340 }} >
        <Button block type="primary" size="large">
          {" "}
          参考文档{" "}
        </Button>
        <Button block size="large">
          {" "}
          Github{" "}
        </Button>
      </Flex>
    </Flex>
  );
};
