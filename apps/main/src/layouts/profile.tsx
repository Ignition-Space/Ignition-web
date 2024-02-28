import { css } from "@emotion/css";
import { Image, Flex, Typography, theme, Avatar } from "antd";

const classes = {
  email: css({
    fontSize: theme.getDesignToken().fontSizeSM,
  }),

  profile: css({
    padding: 8,
  }),
};

export const Profile: React.FC<{
  collapsed: boolean;
}> = (props) => {
  if (props.collapsed) {
    return (
      <Flex justify="center" align="center">
        <Avatar style={{ backgroundColor: "#1677ff" }} size={34} shape="square">
          王
        </Avatar>
      </Flex>
    );
  }

  return (
    <Flex
      justify="flex-start"
      align="center"
      gap={12}
      className={classes.profile}
    >
      <Avatar style={{ backgroundColor: "#1677ff" }} size={34} shape="square">
        王
      </Avatar>
      <Flex vertical justify="space-around">
        <Typography.Text >W.ly19</Typography.Text>
        <Typography.Text ellipsis type="secondary" className={classes.email}>
          @wangly41820@gmail.com
        </Typography.Text>
      </Flex>
    </Flex>
  );
};
