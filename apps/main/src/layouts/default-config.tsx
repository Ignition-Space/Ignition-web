import {
  DashboardOutlined,
  FolderOutlined,
  ShoppingOutlined
} from "@ant-design/icons";
import { ProLayoutProps } from "@ant-design/pro-components";
import { HuosRemixIcon } from "@huos/icons";

export const proLayoutDefaultProps: Partial<ProLayoutProps> = {
  menu: {
    type: 'group'
  },
  route: {
    routes: [
      {
        path: '/',
        name: '总览',
        icon: <DashboardOutlined size={16} />
      },
      {
        path: '/project',
        name: '应用项目',
        routes: [
          {
            path: '/project/app',
            name: '工作台',
            icon: <HuosRemixIcon style={{ fontSize: 16 }} type="icon-lightbulb-flash-line" />
          },
        ]
      },
      {
        path: '/material',
        name: '物料',
        routes: [
          {
            path: '/material/list',
            name: '物料中心',
            icon: <ShoppingOutlined size={16} />
          },
          {
            path: '/material/store',
            name: '物料仓库',
            icon: <FolderOutlined size={16} />
          }
        ]
      }
    ],
  },
};
