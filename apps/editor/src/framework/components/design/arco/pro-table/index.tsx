import { createReactMaterial } from "@huos/core";
import { ProTableView } from "./view";
import { Panel } from "./panel";
import request from "umi-request";

export const __ArcoProTable__ = createReactMaterial(ProTableView, {
  displayName: "高阶表格",
  custom: {
    useResize: false,
  },
  props: {
    request: async (params: any) => {
      const data = await request(
        "https://proapi.azurewebsites.net/github/issues",
        {
          method: "GET",
          params,
        }
      );
      return data;
    },
    searchFields: [
      {
        label: "标题",
        field: "title",
        componentProps: {
          options: [],
          placeholder: "请输入标题",
        },
        componentType: "Input",
      },
      {
        label: "标题",
        field: "title",
        componentProps: {
          options: [],
          placeholder: "请输入标题",
        },
        componentType: "Input",
      },
      {
        label: "标题",
        field: "title",
        componentProps: {
          options: [],
          placeholder: "请输入标题",
        },
        componentType: "Input",
      },
      {
        label: "标题",
        field: "title",
        componentProps: {
          options: [],
          placeholder: "请输入标题",
        },
        componentType: "Input",
      },
      {
        label: "标题",
        field: "title",
        componentProps: {
          options: [],
          placeholder: "请输入标题",
        },
        componentType: "Input",
      },
      {
        label: "标题",
        field: "title",
        componentProps: {
          options: [],
          placeholder: "请输入标题",
        },
        componentType: "Input",
      },

      {
        label: "标题",
        field: "title",
        componentProps: {
          options: [],
          placeholder: "请输入标题",
        },
        componentType: "Input",
      },
      {
        label: "标题",
        field: "title",
        componentProps: {
          options: [],
          placeholder: "请输入标题",
        },
        componentType: "Input",
      },{
        label: "标题",
        field: "title",
        componentProps: {
          options: [],
          placeholder: "请输入标题",
        },
        componentType: "Input",
      },
      {
        label: "标题",
        field: "title",
        componentProps: {
          options: [],
          placeholder: "请输入标题",
        },
        componentType: "Input",
      },

    ],
    columns: [
      {
        title: 'ID',
        dataIndex: 'id'
      },
      {
        title: "标题",
        dataIndex: "title",
      },
      {
        title: "创建时间",
        key: "showTime",
        dataIndex: "created_at",
      },
    ],
  },
  related: {
    settingRender: Panel,
  },
});
