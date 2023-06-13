import * as React from "react";
import { css } from "@emotion/css";
import { theme } from "antd";
import clsx from "clsx";
import classes from "./index.module.sass";

const { useToken } = theme;

export interface IndicatorsProps {
  bound?: string;
  show?: boolean;
}

export const IndicatorRound: React.FC<IndicatorsProps> = (props) => {
  const { token } = useToken();

  return (
    <div
      className={clsx(classes.indicatorRound, {
        [classes.hide]: !props.show,
      })}
    >
      <span
        style={{
          background: token.colorPrimary,
        }}
        className={classes.indicatorRoundInline}
      />
      <span
        style={{
          background: token.colorPrimary,
        }}
        className={classes.indicatorRoundBlock}
      />
      <span />
    </div>
  );
};
