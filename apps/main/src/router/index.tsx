import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import { OutletLayout } from "@/layouts";
import { MicroApp } from "@/pages/micro";

const LoginPage = lazy(() => import("@/pages/login"));
const HomePage = lazy(() => import("@/pages/home"));
const ProjectAppPage = lazy(() => import("@/pages/project/app/list"));
const ProjectAppManagePage = lazy(() => import("@/pages/project/app/manage"));

export const router = createBrowserRouter([
  {
    Component: OutletLayout,
    children: [
      {
        path: "/",
        Component: HomePage,
      },
      {
        path: "/project",
        children: [
          {
            path: "app",
            Component: ProjectAppPage,
          },
          {
            path: 'manage',
            Component: ProjectAppManagePage
          }
        ],
      },
    ],
  },
  {
    path: "/app",
    children: [
      {
        path: "editor",
        Component: MicroApp,
      },
    ],
  },
  {
    path: "/login",
    Component: LoginPage,
  },
]);
