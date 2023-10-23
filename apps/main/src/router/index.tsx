import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import { OutletLayout } from "@/layouts";
import { MicroApp } from "@/pages/micro";

const LoginPage = lazy(() => import("@/pages/login"));
const HomePage = lazy(() => import("@/pages/home"));
const ProjectAppPage = lazy(() => import("@/pages/project/app"));

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
