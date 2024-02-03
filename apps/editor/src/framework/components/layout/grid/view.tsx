import { Col, ColProps, Row } from "antd";
import { ReactMaterialViewType } from "@huos/core";
import { RowProps } from "antd/lib";

export const RowView: ReactMaterialViewType<RowProps> = (
  { children, ...props },
  ref: any
) => {
  return (
    <Row ref={ref} {...props}>
      {children}
    </Row>
  );
};

export const ColView: ReactMaterialViewType<ColProps> = (
  { children, ...props },
  ref: any
) => {
  return (
    <Col ref={ref} {...props}>
      {children}
    </Col>
  );
};
