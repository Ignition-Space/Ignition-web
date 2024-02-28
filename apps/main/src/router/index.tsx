import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import { OutletLayout } from "@/layouts";
import { MicroApp } from "@/pages/micro";

const LoginPage = lazy(() => import("@/pages/login"));
const HomePage = lazy(() => import("@/pages/home"));
const ProjectAppPage = lazy(() => import("@/pages/project/app/list"));
const ProjectAppManagePage = lazy(() => import("@/pages/project/app/manage"));
const ProjectWorkbenchPage = lazy(() => import("@/pages/workbench"));

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
            path: "workbench",
            Component: ProjectWorkbenchPage,
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
