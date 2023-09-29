/** @jsxImportSource @emotion/react */
import React from "react";
import { PlusCircleFilled } from "@ant-design/icons";

export interface EmptySetterProps {
  children?: React.ReactNode;
}

export const EmptySetter: React.FC<EmptySetterProps> = ({ children }) => {
  // 如果children小于1的话，代表组件是空的内容，因此需要为其添加placeholder来保证元素能够被正常插入
  const isEmpty = React.Children.count(children) < 1;

  return isEmpty ? (
    <div
      css={{
        padding: 24,
        color: "#c7c7c7",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
        fontWeight: 500,
        gap: 4,
        background: '#f4f5f4'
      }}
    >
      <PlusCircleFilled />
      <span>请添加您的组件</span>
    </div>
  ) : (
    children
  );
};

export const EmptyRender = <EmptySetter/>