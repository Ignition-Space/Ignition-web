import React from "react";
import { Pagination, PaginationProps } from "antd";
import { ReactMaterialViewType } from "@huos/core";

export const PaginationView: ReactMaterialViewType<
PaginationProps
> = ({ ...props }, ref: any) => {
  return (
    <div style={{ display: 'inline-block', width: '100%' }} ref={ref}  >
      <Pagination {...props} />
    </div>
  );
};

export default PaginationView;
