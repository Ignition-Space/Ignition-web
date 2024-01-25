import { css } from "@emotion/css";
import { HuosRemixIcon } from "@huos/icons";
import { Button, Flex } from "antd";

const classes = {
  btn: css({
    height: 45,
    width: 44,
  }),
};

export const AppMenus = () => {
  return (
    <Flex className={classes.btn} justify="center" align="center" >
      <Button
        type="text"
        icon={<HuosRemixIcon type="icon-menu-fill" />}
      />
    </Flex>
  );
};
